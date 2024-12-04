import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillIconProps {
  Icon: LucideIcon;
}

const SkillIcon = ({ Icon }: SkillIconProps) => {
  return (
    <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg">
      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
    </div>
  );
};

export default SkillIcon;