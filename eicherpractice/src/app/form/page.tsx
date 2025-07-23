'use client';
import React, { useState } from 'react';

const CampaignForm: React.FC = () => {
  const [formData, setFormData] = useState({
    campaignName: '',
    campaignType: '',
    startDate: '',
    endDate: '',
    budget: '',
    productToPromote: '',
    campaignObjective: '',
    targetKPIs: [] as string[],
    state: '',
    city: '',
    masterCollateral: [] as string[],
    collateralLanguage: '',
    remarks: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const updated = checked
        ? [...prev.masterCollateral, value]
        : prev.masterCollateral.filter(item => item !== value);
      return { ...prev, masterCollateral: updated };
    });
  };

  const handleKPIChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, targetKPIs: selected }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 shadow-xl rounded-2xl px-10 py-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 text-left tracking-tight">Campaign Proposal Submission</h2>
        <p className="text-left text-gray-500 mb-2">Fill out the form below with your campaign details and attach relevant documents</p>

        <div className="flex space-x-2 mb-8 justify-center border-b border-gray-200 pb-2">
          <button type="button" className="px-6 py-2 rounded-t-lg bg-emerald-100 text-emerald-700 font-bold shadow-none">Campaign Form</button>
          <button type="button" className="px-6 py-2 rounded-t-lg bg-transparent text-gray-500 font-semibold hover:bg-gray-100 transition">Attendee Selection</button>
          <button type="button" className="px-6 py-2 rounded-t-lg bg-transparent text-gray-500 font-semibold hover:bg-gray-100 transition">Activity Checklist</button>
          <button type="button" className="px-6 py-2 rounded-t-lg bg-transparent text-gray-500 font-semibold hover:bg-gray-100 transition">Expense Claim</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Campaign Name<span className="text-gray-700">*</span></label>
            <input type="text" name="campaignName" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Campaign Type<span className="text-gray-700">*</span></label>
            <select name="campaignType" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option value="">Select</option>
              <option value="Customer Meet">Customer Meet</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Start Date<span className="text-gray-700">*</span></label>
            <input type="date" name="startDate" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">End Date<span className="text-gray-700">*</span></label>
            <input type="date" name="endDate" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Budget (INR)<span className="text-gray-700">*</span></label>
            <input type="number" name="budget" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Product to Promote<span className="text-gray-700">*</span></label>
            <select name="productToPromote" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option value="">Select</option>
              <option value="Pro 38778">Pro 38778</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Campaign Objective<span className="text-gray-700">*</span></label>
            <input type="text" name="campaignObjective" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Target KPIs<span className="text-gray-700">*</span></label>
            <select name="targetKPIs" multiple onChange={handleKPIChange} className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition h-[100px]">
              <option value="Target pool">Target pool</option>
              <option value="Enquiry">Enquiry</option>
              <option value="Retail">Retail</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">State<span className="text-gray-700">*</span></label>
            <select name="state" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option value="">Select</option>
              <option value="Haryana">Haryana</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">City<span className="text-gray-700">*</span></label>
            <select name="city" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option value="">Select</option>
              <option value="Faridabad">Faridabad</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-gray-700">Master Collateral<span className="text-gray-700">*</span></label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
              {['Flyer', 'Presentation', 'Brochure', 'Catalog', 'Standee', 'Banner', 'Pamphlet', 'Booklet'].map((item) => (
                <label key={item} className="inline-flex items-center font-medium text-gray-700">
                  <input type="checkbox" name="masterCollateral" value={item} onChange={handleCheckboxChange} className="mr-2 accent-blue-600" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Collateral Language<span className="text-gray-700">*</span></label>
            <select name="collateralLanguage" onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
              <option value="">Select</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-gray-700">Remarks</label>
            <textarea name="remarks" onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" rows={3}></textarea>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-5 py-2 rounded-lg shadow transition">Save as Draft</button>
          <button type="submit" className="bg-green-700 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg shadow transition">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
