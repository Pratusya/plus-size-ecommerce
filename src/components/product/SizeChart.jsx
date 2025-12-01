import Modal from '../common/Modal';

const sizeData = {
  women: {
    title: "Women's Size Chart",
    measurements: [
      { size: '2XL', bust: '46-48', waist: '38-40', hips: '48-50' },
      { size: '3XL', bust: '50-52', waist: '42-44', hips: '52-54' },
      { size: '4XL', bust: '54-56', waist: '46-48', hips: '56-58' },
      { size: '5XL', bust: '58-60', waist: '50-52', hips: '60-62' },
      { size: '6XL', bust: '62-64', waist: '54-56', hips: '64-66' }
    ]
  },
  men: {
    title: "Men's Size Chart",
    measurements: [
      { size: '2XL', chest: '50-52', waist: '42-44', hips: '48-50' },
      { size: '3XL', chest: '54-56', waist: '46-48', hips: '52-54' },
      { size: '4XL', chest: '58-60', waist: '50-52', hips: '56-58' },
      { size: '5XL', chest: '62-64', waist: '54-56', hips: '60-62' },
      { size: '6XL', chest: '66-68', waist: '58-60', hips: '64-66' }
    ]
  },
  kids: {
    title: "Kids' Size Chart",
    measurements: [
      { size: 'XL', chest: '32-34', waist: '26-28', hips: '32-34' },
      { size: '2XL', chest: '35-37', waist: '29-31', hips: '35-37' },
      { size: '3XL', chest: '38-40', waist: '32-34', hips: '38-40' }
    ]
  }
};

const SizeChart = ({ isOpen, onClose, category = 'women' }) => {
  const data = sizeData[category] || sizeData.women;
  const isWomen = category === 'women';
  const isKids = category === 'kids';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={data.title} size="lg">
      {/* Size Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-light-gray">
              <th className="px-4 py-3 text-left font-semibold text-charcoal">Size</th>
              <th className="px-4 py-3 text-left font-semibold text-charcoal">
                {isWomen ? 'Bust' : 'Chest'} (in)
              </th>
              <th className="px-4 py-3 text-left font-semibold text-charcoal">Waist (in)</th>
              <th className="px-4 py-3 text-left font-semibold text-charcoal">Hips (in)</th>
            </tr>
          </thead>
          <tbody>
            {data.measurements.map((row, index) => (
              <tr
                key={row.size}
                className={index % 2 === 0 ? 'bg-white' : 'bg-light-gray/50'}
              >
                <td className="px-4 py-3 font-medium text-charcoal">{row.size}</td>
                <td className="px-4 py-3 text-medium-gray">{row.bust || row.chest}</td>
                <td className="px-4 py-3 text-medium-gray">{row.waist}</td>
                <td className="px-4 py-3 text-medium-gray">{row.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How to Measure */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-charcoal font-montserrat mb-4">
          How to Measure
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-soft-cream rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <h4 className="font-semibold text-charcoal">
                {isWomen ? 'Bust' : 'Chest'}
              </h4>
            </div>
            <p className="text-sm text-medium-gray">
              Measure around the fullest part of your {isWomen ? 'bust' : 'chest'}, 
              keeping the tape level.
            </p>
          </div>
          <div className="p-4 bg-soft-cream rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <h4 className="font-semibold text-charcoal">Waist</h4>
            </div>
            <p className="text-sm text-medium-gray">
              Measure around your natural waistline, the narrowest part of your waist.
            </p>
          </div>
          <div className="p-4 bg-soft-cream rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <h4 className="font-semibold text-charcoal">Hips</h4>
            </div>
            <p className="text-sm text-medium-gray">
              Measure around the fullest part of your hips, keeping the tape level.
            </p>
          </div>
        </div>
      </div>

      {/* Fit Tips */}
      <div className="mt-8 p-4 bg-light-gray rounded-lg">
        <h4 className="font-semibold text-charcoal mb-2">Fit Tips</h4>
        <ul className="text-sm text-medium-gray space-y-1">
          <li>• If you&apos;re between sizes, we recommend sizing up for a more comfortable fit.</li>
          <li>• Our styles are designed with plus-size bodies in mind, ensuring comfort and style.</li>
          <li>• Check individual product pages for specific fit notes.</li>
          {!isKids && (
            <li>• Most items feature stretch fabrics for added flexibility.</li>
          )}
        </ul>
      </div>
    </Modal>
  );
};

export default SizeChart;
