'use client';
import React, { useState } from 'react';
import { fields } from './formcontent';
import './form.css';

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
  const tabArray = [
    {
      name: 'Campaign Form',
      component: <div>Campaign Form</div>
    },
    {
      name: 'Attendee Selection',
      component: <div>Attendee Selection</div>
    },
    {
      name: 'Activity Checklist',
      component: <div>Activity Checklist</div>
    },
    {
      name: 'Expense Claim',
      component: <div>Expense Claim</div>
    }
  ]



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl px-10 py-4 max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-left tracking-tight">Campaign Proposal Submission</h2>
        <p className="text-left text-gray-500 mb-2">Fill out the form below with your campaign details and attach relevant documents</p>

        <div className="flex space-x-2 mb-8 justify-left border-b-9 border-gray-200 pb-2">
          {tabArray.map((tab, idx) => (
            <button key={idx} type="button" className={`px-6 py-2 rounded-sm ${idx === 0 ? 'bg-emerald-100 text-emerald-700 font-light text-sm shadow-none' : 'bg-transparent text-gray-500 text-sm font-semibold hover:bg-gray-100 transition'}`}>{tab.name}</button>
          ))}
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 px-15 gap-y-6">
          {fields.map((field, idx) => {
            // Type guards for group fields
            if (field.type === 'group' && field.children && field.groupName) {
              return (
                <div key={field.groupName + idx} className={field.colSpan === 2 ? 'w-full flex gap-10' : 'flex gap-2'}>
                  {field.children.map((child: any, cidx: number) => (
                    <div key={child.name} className={child.width === '1/4' ? 'w-1/2' : child.width === '1/3' ? 'w-1/3' : 'w-full'}>
                      <label className="block mb-1 font-semibold text-gray-600">{child.label}{child.required && <span className="text-gray-600">*</span>}</label>
                      {child.type === 'date' && (
                        <input type="date" name={child.name} onChange={handleChange} required={child.required} className="w-full outline-none   border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
                      )}
                      {child.type === 'select' && Array.isArray(child.options) && (
                        <select name={child.name} onChange={handleChange} required={child.required} className="w-full outline-none   border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
                          {child.options.map((opt: any) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              );
            }
            if (field.type === 'custom' && field.name === 'targetKPIs') {
              // Render Target KPIs custom block
              return (
                <div key="targetKPIs" className="w-full">
                  <label className="block mb-1 font-semibold text-gray-600">Target KPIs<span className="text-gray-800">*</span></label>
                  <div className="flex gap-4 mb-4">
                    <select
                      value={selectedKPI}
                      onChange={handleKPISelect}
                      className="w-1/2 outline-none   border-1 border-gray-400 rounded-lg pl-2 pr-8 py-2 bg-[#f5f5f5] text-gray-700"
                    >
                      <option value="">Select KPI</option>
                      <option value="Target pool">Target pool</option>
                      <option value="Enquiry">Enquiry</option>
                      <option value="Retail">Retail</option>
                    </select>
                    <select
                      value={selectedKPIValue}
                      onChange={handleKPIValueSelect}
                      className="w-1/2 outline-none   border-1 border-gray-400 rounded-lg pl-2 pr-8 py-2 bg-[#f5f5f5] text-gray-700"
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
              );
            }
            if (field.type === 'custom' && field.name === 'masterCollateral') {
              // Render Master Collateral custom block
              return (
                <div key="masterCollateral" className="w-full">
                  <label className="block mb-1 font-semibold text-gray-600">Master Collateral<span className="text-gray-600">*</span></label>
                  <div className="grid grid-cols-2 w-full gap-3 p-3 rounded-sm ">
                    {['Flyer', 'Presentation', 'Brochure', 'Catalog', 'Standee', 'Banner', 'Pamphlet', 'Booklet'].map((item) => (
                      <label key={item} className="inline-flex items-center font-medium text-gray-600 text-sm">
                        <input type="checkbox" name="masterCollateral" value={item} onChange={handleCheckboxChange} className="w-4 h-4 border border-gray-400 rounded-lg bg-white shadow-sm accent-gray-500 outline-none focus:ring-0 focus:border-gray-400 mr-2" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              );
            }
            // Standard fields
            return (
              <div key={field.name} className={field.colSpan === 2 ? 'w-full' : field.colSpan === 4 ? 'md:col-span-2 w-1/2' : ''}>
                <label className="block mb-1 font-semibold text-gray-600">{field.label}{field.required && <span className="text-gray-600">*</span>}</label>
                {field.type === 'text' && (
                  <input type="text" name={field.name} onChange={handleChange} required={field.required} className="w-full outline-none   border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
                )}
                {field.type === 'number' && (
                  <input type="number" name={field.name} onChange={handleChange} required={field.required} className="w-full outline-none   border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" />
                )}
                {field.type === 'select' && Array.isArray(field.options) && (
                  <select name={field.name} onChange={handleChange} required={field.required} className="w-full outline-none  bg-red  border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]">
                    {field.options.map((opt: any) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                )}
                {field.type === 'textarea' && (
                  <textarea name={field.name} onChange={handleChange} required={field.required} className="w-full outline-none   border-1 border-gray-400 rounded-sm px-4 py-2 bg-[#f5f5f5]" rows={('rows' in field && (field as any).rows) ? (field as any).rows : 3}></textarea>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end space-x-4 mt-8 border-t-9 border-gray-200">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-gray-800  mt-5 font-600 px-5 py-2 rounded-md shadow transition">Save as Draft</button>
          <button type="submit" className="bg-green-700 hover:bg-green-900 cursor-pointer text-white mt-5 font-600 px-8 py-2 rounded-md shadow transition">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
