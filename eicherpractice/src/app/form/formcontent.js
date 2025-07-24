 // Define the fields array for standard fields and layout
 export const fields = [
    {
      type: 'text',
      name: 'campaignName',
      label: 'Campaign Name',
      required: true,
      colSpan: 1,
    },
    {
      type: 'group',
      groupName: 'dateRange',
      colSpan: 1,
      children: [
        {
          type: 'date',
          name: 'startDate',
          label: 'Start Date',
          required: true,
          width: '1/2',
        },
        {
          type: 'date',
          name: 'endDate',
          label: 'End Date',
          required: true,
          width: '1/2',
        },
      ],
    },
    {
      type: 'select',
      name: 'campaignType',
      label: 'Campaign Type',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Customer Meet', label: 'Customer Meet' },
      ],
      colSpan: 1,
    },
    {
      type: 'number',
      name: 'budget',
      label: 'Budget (INR)',
      required: true,
      colSpan: 1,
    },
    {
      type: 'text',
      name: 'targetSegment',
      label: 'Target Segment',
      required: false,
      colSpan: 1,
    },
    {
      type: 'select',
      name: 'productToPromote',
      label: 'Product to Promote',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Pro 38778', label: 'Pro 38778' },
      ],
      colSpan: 1,
    },
    {
      type: 'textarea',
      name: 'campaignObjective',
      label: 'Campaign Objective',
      required: true,
      colSpan: 1,
    },
    // Target KPIs will be rendered custom, but referenced for order
    { type: 'custom', name: 'targetKPIs', colSpan: 2 },
    {
      type: 'group',
      groupName: 'location',
      colSpan: 2,
      children: [
        {
          type: 'select',
          name: 'state',
          label: 'State',
          required: true,
          width: '1/3',
          options: [
            { value: '', label: 'Select' },
            { value: 'Haryana', label: 'Haryana' },
          ],
        },
        {
          type: 'select',
          name: 'city',
          label: 'City',
          required: true,
          width: '1/3',
          options: [
            { value: '', label: 'Select' },
            { value: 'Faridabad', label: 'Faridabad' },
          ],
        },
      ],
    },
    {
      type: 'textarea',
      name: 'remarks',
      label: 'Remarks',
      required: false,
      colSpan: 2,
    },
    // Master Collateral will be rendered custom, but referenced for order
    { type: 'custom', name: 'masterCollateral', colSpan: 2 },
    {
      type: 'select',
      name: 'collateralLanguage',
      label: 'Collateral Language',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Telugu', label: 'Telugu' },
      ],
      colSpan: 4,
    },
  ];