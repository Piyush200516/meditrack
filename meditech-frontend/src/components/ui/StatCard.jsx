import { motion } from 'framer-motion';

const StatCard = ({ title, value, change, icon: Icon, color = 'blue' }) => {
  const colorMap = {
    blue: 'from-blue-500 to-indigo-500 bg-blue-100/50',
    green: 'from-emerald-500 to-green-500 bg-emerald-100/50',
    orange: 'from-orange-500 to-amber-500 bg-orange-100/50',
    red: 'from-red-500 to-rose-500 bg-red-100/50',
    purple: 'from-purple-500 to-violet-500 bg-purple-100/50',
  };

  const isPositive = change.startsWith('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 relative overflow-hidden"
    >
      {/* Gradient Badge */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br group-hover:scale-110 transition-transform" />
      
      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-black text-gray-900 mb-1">{value}</p>
          <p className={`text-sm font-semibold flex items-center gap-1 ${
            isPositive ? 'text-emerald-600' : 'text-red-600'
          }`}>
            {change}
          </p>
        </div>
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorMap[color]} shadow-lg flex-shrink-0`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;

