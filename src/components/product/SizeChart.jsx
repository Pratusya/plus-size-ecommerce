import { motion } from 'framer-motion';
import Modal from '../common/Modal';

const SizeChart = ({ isOpen, onClose, category = 'women' }) => {
  const sizeData = {
    women: {
      title: "Women's Size Guide",
      headers: ['Size', 'US Size', 'Bust', 'Waist', 'Hips'],
      rows: [
        ['2XL', '18-20', '46-48"', '38-40"', '48-50"'],
        ['3XL', '22-24', '50-52"', '42-44"', '52-54"'],
        ['4XL', '26-28', '54-56"', '46-48"', '56-58"'],
        ['5XL', '30-32', '58-60"', '50-52"', '60-62"'],
        ['6XL', '34-36', '62-64"', '54-56"', '64-66"']
      ]
    },
    men: {
      title: "Men's Size Guide",
      headers: ['Size', 'Chest', 'Waist', 'Hip'],
      rows: [
        ['2XL', '50-52"', '42-44"', '50-52"'],
        ['3XL', '54-56"', '46-48"', '54-56"'],
        ['4XL', '58-60"', '50-52"', '58-60"'],
        ['5XL', '62-64"', '54-56"', '62-64"'],
        ['6XL', '66-68"', '58-60"', '66-68"']
      ]
    },
    kids: {
      title: "Kids Size Guide",
      headers: ['Size', 'Age', 'Height', 'Chest', 'Waist'],
      rows: [
        ['8', '7-8', '50-52"', '26-27"', '23-24"'],
        ['10', '9-10', '53-55"', '28-29"', '24-25"'],
        ['12', '11-12', '56-58"', '30-31"', '25-26"'],
        ['14', '13-14', '59-61"', '32-33"', '26-27"'],
        ['16', '15-16', '62-64"', '34-35"', '28-29"'],
        ['18', '17-18', '65-67"', '36-37"', '30-31"']
      ]
    }
  };

  const data = sizeData[category] || sizeData.women;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={data.title} size="lg">
      <div className="space-y-6">
        {/* How to Measure */}
        <div className="bg-blush-pink rounded-xl p-4">
          <h3 className="font-semibold font-poppins text-deep-charcoal mb-2">
            How to Measure
          </h3>
          <ul className="text-sm text-slate space-y-1">
            <li>• <strong>Bust/Chest:</strong> Measure around the fullest part of your chest</li>
            <li>• <strong>Waist:</strong> Measure around your natural waistline</li>
            <li>• <strong>Hips:</strong> Measure around the fullest part of your hips</li>
          </ul>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-royal-purple text-white">
                {data.headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? 'bg-cloud-gray' : 'bg-white'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: rowIndex * 0.1 }}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-deep-charcoal">
                      {cellIndex === 0 ? (
                        <span className="font-semibold text-royal-purple">{cell}</span>
                      ) : cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tips */}
        <div className="border-t border-cloud-gray pt-4">
          <p className="text-sm text-slate">
            <strong>Tip:</strong> If you&apos;re between sizes, we recommend sizing up for a more comfortable fit. 
            Our clothes are designed with your comfort in mind!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SizeChart;
