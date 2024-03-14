import React, { FC } from "react";

type ExpertiseProps = {
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ExpertiseCard: FC<ExpertiseProps> = ({ label, Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-[#757575] md:shadow-[#949494] shadow-sm px-3 py-3 md:px-10 md:py-6 rounded-md gap-3">
      <div className="p-4 rounded-full bg-darkPrimary ">
        <Icon
          className="h-[20px] w-[20px] md:w-[52px] md:h-[52px]"
          color="white"
        />
      </div>
      <p className="text-xs md:text-lg tracking-wide text-center">{label}</p>
    </div>
  );
};

export default ExpertiseCard;
