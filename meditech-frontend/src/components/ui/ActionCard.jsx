import { motion } from 'framer-motion';

const ActionCard = ({ title, description, icon: Icon, onClick, color = 'blue' }) => {
  const colorMap = {
    blue: 'from-blue-500 to-indigo-500 hover:from-blue-600',
    green: 'from-emerald-500 to-green-500 hover:from-emerald-600',
    purple: 'from-purple-500 to-violet-500 hover:from-purple-600',
  };

  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 w-full h-48 flex flex-col justify-between overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" />
      
      <div className="relative z-10 flex items-start gap-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorMap[color]} shadow-lg flex-shrink-0`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="relative z-10 self-start pt-2">
        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
          Get started →
        </span>
      </div>
    </motion.button>
  );
};

export default ActionCard;

