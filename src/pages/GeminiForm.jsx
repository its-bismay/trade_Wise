import React, { useState } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import run from '../config/gemini';

const GeminiForm = () => {
  const [formData, setFormData] = useState({
    inputText: '',
    selectedOption: '',
    description: '',
    optionalField: '',
    newTextField1: '', // New text field 1
    newTextField2: '', // New text field 2
  });
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [pdfFilename, setPdfFilename] = useState('data'); // Default PDF filename

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const requestData = {
      text: formData.inputText,
      option: formData.selectedOption,
      description: formData.description,
      newText1: formData.newTextField1,
      newText2: formData.newTextField2,
    };
  
    if (formData.optionalField) {
      requestData.optionalField = formData.optionalField;
    }
  
    const myPrompt = `
      Provide information on cross-border trade for the following product:
      Product Name:${requestData.text},
      Product Description:${requestData.description},
      Material Composition:${requestData.newText1},
      Intended Use:${requestData.newText2},
      ${requestData.optionalField ? `HS Code: ${requestData.optionalField}` : ""}
      To the following country:
      Country Name:${requestData.option},
      Please provide details on:
      Import/Export Regulations (duties, taxes, non-tariff barriers, customs procedures, labeling, packaging) and
      Market Information (demand, competition, distribution channels, consumer preferences) and Trade Agreements (preferential trade agreements, free trade agreements)
    and consider them three main headings of the output`.trim();
  
    try {
      const response = await run(myPrompt); // Await the resolved promise
      console.log(response);
      setResponseData(response); // Assuming 'response' contains the required text
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponseData({ error: 'Failed to fetch data from Gemini API' }); // Provide fallback UI
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add data to the PDF, assuming responseData is an object
    doc.text('Gemini API Response Data', 10, 10);
    doc.text(JSON.stringify(responseData, null, 2), 10, 20);

    // Save the PDF with a custom filename
    doc.save(`${pdfFilename}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center w-full">Find Required Data</h2>
      <div className="w-full max-w-7xl">
        {/* Horizontal line below the heading */}
        <div className="border-b-2 border-black mb-6"></div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Part - Form */}
          <div className="flex-1 pr-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Product Name:</label>
                <input
                  type="text"
                  name="inputText"
                  value={formData.inputText}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter Product Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Country To Export:</label>
                <select
                  name="selectedOption"
                  value={formData.selectedOption}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                >
                  <option value="">Select a country</option>
                  <option value="United States">United States</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Product Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  rows="4"
                  placeholder="Enter a description of the product"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">HS Code:(if known)</label>
                <input
                  type="text"
                  name="optionalField"
                  value={formData.optionalField}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter HS code for the product (if known)"
                />
              </div>
              {/* New Text Field 1 */}
              <div>
                <label className="block text-sm font-semibold mb-2">Material Composition:</label>
                <input
                  type="text"
                  name="newTextField1"
                  value={formData.newTextField1}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter materials used in it."
                />
              </div>
              {/* New Text Field 2 */}
              <div>
                <label className="block text-sm font-semibold mb-2">Intended Use:</label>
                <input
                  type="text"
                  name="newTextField2"
                  value={formData.newTextField2}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Usage of this product"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-2 bg-black text-white rounded-md"
                >
                  Fetch Data
                </button>
              </div>
            </form>
          </div>

          {/* Vertical divider between Left and Right */}
          <div className="border-r-2 border-black h-full"></div>

          {/* Right Part - Data Display */}
          <div className="flex-1 pl-4 bg-gray-100 p-4 rounded-md h-96 overflow-y-auto">
  {loading ? (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin w-12 h-12 border-4 border-black border-t-transparent border-solid rounded-full"></div>
    </div>
  ) : (
    <div>
      {responseData ? (
        <>
          <h3 className="text-xl font-semibold mb-4">Your Output:</h3> {/* Added Output Text */}
          {typeof responseData === 'string' ? (
            responseData.split('. ').map((item, index) => {
              const [heading, content] = item.split(':');
              return (
                <div key={index} className="mb-4">
                  <h4 className="text-lg font-bold">{heading.trim()}</h4>
                  <p className="text-sm text-gray-700">{content ? content.trim() : ''}</p>
                </div>
              );
            })
          ) : typeof responseData === 'object' ? (
            Object.entries(responseData).map(([heading, content], index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-bold">{heading}</h4>
                <p className="text-sm text-gray-700">{content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">Unexpected data format.</p>
          )}
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  )}
</div>

        </div>

        {/* Download PDF Section */}
        {responseData && (
          <div className="mt-4 flex justify-between items-center w-full max-w-7xl">
            <input
              type="text"
              value={pdfFilename}
              onChange={(e) => setPdfFilename(e.target.value)}
              placeholder="Enter filename"
              className="p-2 border border-gray-300 rounded-md w-3/4"
            />
            <button
              onClick={handleDownload}
              className="ml-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Download PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiForm;






