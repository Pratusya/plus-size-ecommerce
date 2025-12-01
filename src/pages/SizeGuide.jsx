import { useState } from 'react';

const sizeData = {
  women: {
    title: "Women's Size Chart",
    measurements: [
      { size: '2XL', bust: '46-48', waist: '38-40', hips: '48-50', usSize: '18-20' },
      { size: '3XL', bust: '50-52', waist: '42-44', hips: '52-54', usSize: '22-24' },
      { size: '4XL', bust: '54-56', waist: '46-48', hips: '56-58', usSize: '26-28' },
      { size: '5XL', bust: '58-60', waist: '50-52', hips: '60-62', usSize: '30-32' },
      { size: '6XL', bust: '62-64', waist: '54-56', hips: '64-66', usSize: '34-36' }
    ]
  },
  men: {
    title: "Men's Size Chart",
    measurements: [
      { size: '2XL', chest: '50-52', waist: '42-44', hips: '48-50', neck: '18-18.5' },
      { size: '3XL', chest: '54-56', waist: '46-48', hips: '52-54', neck: '19-19.5' },
      { size: '4XL', chest: '58-60', waist: '50-52', hips: '56-58', neck: '20-20.5' },
      { size: '5XL', chest: '62-64', waist: '54-56', hips: '60-62', neck: '21-21.5' },
      { size: '6XL', chest: '66-68', waist: '58-60', hips: '64-66', neck: '22-22.5' }
    ]
  },
  kids: {
    title: "Kids' Size Chart",
    measurements: [
      { size: 'XL', chest: '32-34', waist: '26-28', hips: '32-34', age: '10-12' },
      { size: '2XL', chest: '35-37', waist: '29-31', hips: '35-37', age: '12-14' },
      { size: '3XL', chest: '38-40', waist: '32-34', hips: '38-40', age: '14-16' }
    ]
  }
};

const SizeGuide = () => {
  const [activeTab, setActiveTab] = useState('women');

  const tabs = [
    { id: 'women', label: "Women's Sizes" },
    { id: 'men', label: "Men's Sizes" },
    { id: 'kids', label: "Kids' Sizes" }
  ];

  const data = sizeData[activeTab];
  const isWomen = activeTab === 'women';
  const isMen = activeTab === 'men';
  const isKids = activeTab === 'kids';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-soft-cream">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-montserrat mb-4">
            Size Guide
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size charts. All measurements are in inches.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-light-gray rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-deep-teal text-white'
                      : 'text-medium-gray hover:text-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size Table */}
          <div className="bg-white rounded-xl shadow-sm border border-soft-gray overflow-hidden mb-12">
            <div className="p-6 border-b border-soft-gray">
              <h2 className="text-xl font-bold text-charcoal font-montserrat">
                {data.title}
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="px-6 py-4 text-left font-semibold text-charcoal">Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal">
                      {isWomen ? 'Bust' : 'Chest'} (in)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal">Waist (in)</th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal">Hips (in)</th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal">
                      {isWomen && 'US Size'}
                      {isMen && 'Neck (in)'}
                      {isKids && 'Age'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.measurements.map((row, index) => (
                    <tr
                      key={row.size}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-light-gray/30'}
                    >
                      <td className="px-6 py-4 font-bold text-deep-teal">{row.size}</td>
                      <td className="px-6 py-4 text-charcoal">{row.bust || row.chest}</td>
                      <td className="px-6 py-4 text-charcoal">{row.waist}</td>
                      <td className="px-6 py-4 text-charcoal">{row.hips}</td>
                      <td className="px-6 py-4 text-charcoal">
                        {isWomen && row.usSize}
                        {isMen && row.neck}
                        {isKids && row.age}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Measure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-charcoal font-montserrat mb-6 text-center">
              How to Measure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Illustration */}
              <div className="bg-soft-cream rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-64 mx-auto bg-white rounded-full relative flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-deep-teal/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-medium-gray mt-4">
                    Use a flexible measuring tape for best results
                  </p>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {isWomen ? 'Bust' : 'Chest'}
                    </h3>
                    <p className="text-medium-gray">
                      Measure around the fullest part of your {isWomen ? 'bust' : 'chest'}, 
                      keeping the measuring tape level and parallel to the floor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Waist</h3>
                    <p className="text-medium-gray">
                      Measure around your natural waistline (the narrowest part of your torso), 
                      usually just above your belly button.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Hips</h3>
                    <p className="text-medium-gray">
                      Measure around the fullest part of your hips, usually 7-9 inches below 
                      your waist.
                    </p>
                  </div>
                </div>

                {isMen && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Neck</h3>
                      <p className="text-medium-gray">
                        Measure around the base of your neck where a shirt collar would sit.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Fit Tips */}
          <div className="bg-light-gray rounded-xl p-8">
            <h2 className="text-xl font-bold text-charcoal font-montserrat mb-6">
              Fit Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-medium-gray">
                  <strong className="text-charcoal">Between sizes?</strong> We recommend sizing up for a more comfortable fit.
                </p>
              </div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-medium-gray">
                  <strong className="text-charcoal">Prefer a looser fit?</strong> Order one size up from your measurements.
                </p>
              </div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-medium-gray">
                  <strong className="text-charcoal">Our fabrics stretch!</strong> Most items feature stretch for extra comfort.
                </p>
              </div>
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-medium-gray">
                  <strong className="text-charcoal">Still unsure?</strong> Check individual product pages for specific fit notes.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-medium-gray mb-4">
              Need help finding your size? Our style experts are here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-deep-teal font-semibold hover:underline"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SizeGuide;
