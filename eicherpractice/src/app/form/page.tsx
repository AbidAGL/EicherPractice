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
    targetKPIs: [] as { kpi: string, value: string }[],
    state: '',
    city: '',
    masterCollateral: [] as string[],
    collateralLanguage: '',
    remarks: '',
  });
  const [selectedKPI, setSelectedKPI] = useState('');
  const [selectedKPIValue, setSelectedKPIValue] = useState('');

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

  const handleAddKPI = () => {
    if (selectedKPI && selectedKPIValue) {
      setFormData(prev => ({
        ...prev,
        targetKPIs: [...prev.targetKPIs, { kpi: selectedKPI, value: selectedKPIValue }],
      }));
      setSelectedKPI('');
      setSelectedKPIValue('');
    }
  };

  const handleRemoveKPI = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      targetKPIs: prev.targetKPIs.filter((_, i) => i !== idx),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  // Update KPI dropdowns to add onChange
  const handleKPISelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedKPI(value);
    if (value && selectedKPIValue) {
      setFormData(prev => ({
        ...prev,
        targetKPIs: [...prev.targetKPIs, { kpi: value, value: selectedKPIValue }],
      }));
      setSelectedKPI('');
      setSelectedKPIValue('');
    }
  };
  const handleKPIValueSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedKPIValue(value);
    if (selectedKPI && value) {
      setFormData(prev => ({
        ...prev,
        targetKPIs: [...prev.targetKPIs, { kpi: selectedKPI, value }],
      }));
      setSelectedKPI('');
      setSelectedKPIValue('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl px-10 py-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 text-left tracking-tight">Campaign Proposal Submission</h2>
        <p className="text-left text-gray-500 mb-2">Fill out the form below with your campaign details and attach relevant documents</p>

        <div className="flex space-x-2 mb-8 justify-center border-b-1 border-gray-400 pb-2">
          <button type="button" className="px-6 py-2 rounded-sm bg-emerald-100 text-emerald-700 font-light shadow-none">Campaign Form</button>
          <button type="button" className="px-6 py-2 rounded-sm bg-transparent text-gray-500 font-semibold hover:bg-gray-100 transition">Attendee Selection</button>
          <button type="button" className="px-6 py-2 rounded-sm bg-transparent text-gray-500 font-semibold hover:bg-gray-100 transition">Activity Checklist</button>
          <button type="button" className="px-6 py-2 rounded-sm bg-transparent text-gray-500 font-semibold hover:bg-gray-100 transition">Expense Claim</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Row 1: Campaign Name | Start Date */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">Campaign Name<span className="text-gray-600">*</span></label>
            <input type="text" name="campaignName" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
          </div>
          <div className='flex gap-2'>
            <div className='w-1/2'>
              <label className="block mb-1 font-semibold text-gray-600">Start Date<span className="text-gray-600">*</span></label>
              <input type="date" name="startDate" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
            </div>

            <div className='w-1/2'>
              <label className="block mb-1 font-semibold text-gray-600">End Date<span className="text-gray-600">*</span></label>
              <input type="date" name="endDate" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
            </div>
          </div>

          {/* Row 2: Campaign Type | End Date */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">Campaign Type<span className="text-gray-600">*</span></label>
            <select name="campaignType" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
              <option value="">Select</option>
              <option value="Customer Meet">Customer Meet</option>
            </select>
          </div>


          {/* Row 3: Target Segment | Budget */}



          <div>
            <label className="block mb-1 font-semibold text-gray-600">Budget (INR)<span className="text-gray-600">*</span></label>
            <input type="number" name="budget" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600">Target Segment</label>
            <input type="text" name="targetSegment" onChange={handleChange} className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
          </div>

          {/* Row 4: Campaign Objective | Product to Promote */}
          <div>
            <label className="block mb-1 font-semibold text-gray-600">Product to Promote<span className="text-gray-600">*</span></label>
            <select name="productToPromote" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
              <option value="">Select</option>
              <option value="Pro 38778">Pro 38778</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600">Campaign Objective<span className="text-gray-600">*</span></label>
            <textarea name="campaignObjective" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
          </div>


          {/* Target KPIs Section (custom) */}
          <div className="w-full">
            <label className="block mb-1 font-semibold text-gray-800">Target KPIs<span className="text-gray-800">*</span></label>
            <div className="flex gap-4 mb-4">
              <select
                value={selectedKPI}
                onChange={handleKPISelect}
                className="w-1/2 outline-none focus:border-transparent  border-1 border-gray-400 rounded-lg pl-2 pr-8 py-2 bg-[#f5f5f5] text-gray-700"
              >
                <option value="">Select KPI</option>
                <option value="Target pool">Target pool</option>
                <option value="Enquiry">Enquiry</option>
                <option value="Retail">Retail</option>
              </select>
              <select
                value={selectedKPIValue}
                onChange={handleKPIValueSelect}
                className="w-1/2 outline-none focus:border-transparent  border-1 border-gray-400 rounded-lg pl-2 pr-8 py-2 bg-[#f5f5f5] text-gray-700"
              >
                <option value="">Value</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {formData.targetKPIs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="bg-[#f5f5f5] border-1 border-gray-400 rounded-lg px-4 py-2 text-gray-700">
                    {item.kpi} , {item.value}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveKPI(idx)}
                    className="text-4xl text-gray-800 font-bold hover:text-red-600 focus:outline-none"
                    aria-label="Remove KPI"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Row 5: State | City */}
          <div className='flex gap-5'>
            <div className='w-1/3'>
              <label className="block mb-1 font-semibold text-gray-600">State<span className="text-gray-600">*</span></label>
              <select name="state" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
                <option value="">Select</option>
                <option value="Haryana">Haryana</option>
              </select>
            </div>
            <div className='w-1/3'>
              <label className="block mb-1 font-semibold text-gray-600">City<span className="text-gray-600">*</span></label>
              <select name="city" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
                <option value="">Select</option>
                <option value="Faridabad">Faridabad</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-1 font-semibold text-gray-600">Remarks</label>
            <textarea name="remarks" onChange={handleChange} className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" rows={3}></textarea>
          </div>
          {/* Row 6: Target KPIs (full width) */}


          {/* Row 7: Master Collateral (full width) */}
          <div className="">
            <label className="block mb-1 font-semibold text-gray-600">Master Collateral<span className="text-gray-600">*</span></label>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 p-3 rounded-sm ">
              {['Flyer', 'Presentation', 'Brochure', 'Catalog', 'Standee', 'Banner', 'Pamphlet', 'Booklet'].map((item) => (
                <label key={item} className="inline-flex items-center font-medium text-gray-600 text-sm">
                  <input type="checkbox" name="masterCollateral" value={item} onChange={handleCheckboxChange} className="w-4 h-4 border border-gray-400 rounded-lg bg-white shadow-sm accent-gray-500 outline-none focus:ring-0 focus:border-gray-400 mr-2" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Row 8: Collateral Language | (empty for alignment) */}

          <div></div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600">Collateral Language<span className="text-gray-600">*</span></label>
            <select name="collateralLanguage" onChange={handleChange} required className="w-full outline-none focus:border-transparent  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
              <option value="">Select</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>
          {/* Row 9: Remarks (full width) */}

        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-600 px-5 py-2 rounded-md shadow transition">Save as Draft</button>
          <button type="submit" className="bg-green-700 hover:bg-blue-700 text-white font-600 px-8 py-2 rounded-md shadow transition">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
