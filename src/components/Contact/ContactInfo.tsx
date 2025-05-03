import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { LuGlobe } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <div className="w-full mt-10 lg:mt-0">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-primaryPurple mb-4">CONTACT <span className="font-light">INFO</span></h2>
      </div>

      <div className="space-y-8">
        {/* Saudi Arabia */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-primaryPurple text-xl" />
            <span className="text-xl text-primaryPurple font-medium">SAUDI ARABIA</span>
          </div>
          <div className="ml-7 space-y-1">
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-primaryPurple text-xl" />
              <span className="text-primaryPurple">INFO@BOSS.SA</span>
            </div>
            <div className="flex items-center gap-2">
              <LuGlobe className="text-primaryPurple text-xl" />
              <span className="text-primaryPurple">WWW.BOSS.SA</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-primaryPurple text-xl" />
              <span className="text-primaryPurple">+966 (X) XXXXXX</span>
            </div>
          </div>
        </div>

        {/* France */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-primaryPurple text-xl" />
            <span className="text-xl text-primaryPurple font-medium">FRANCE</span>
          </div>
          <div className="ml-7 space-y-1">
            <p className="text-primaryPurple">BOSS ET PAPILLON</p>
            <p className="text-primaryPurple">93519551720017</p>
            <p className="text-primaryPurple">5 ALLÉE DE DERRIÈRE LES JARDINS,</p>
            <p className="text-primaryPurple">VILLIERS-SUR-MARNE 94350, FRANCE</p>
          </div>
        </div>

        {/* London */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-primaryPurple text-xl" />
            <span className="text-xl text-primaryPurple font-medium">LONDON</span>
          </div>
          <div className="ml-7 space-y-1">
            <p className="text-primaryPurple">2 ARUNDEL ST, TEMPLE,</p>
            <p className="text-primaryPurple">LONDON WC2R 3DA,</p>
            <p className="text-primaryPurple">UNITED KINGDOM</p>
          </div>
        </div>

        {/* Dubai */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-primaryPurple text-xl" />
            <span className="text-xl text-primaryPurple font-medium">DUBAI</span>
          </div>
          <div className="ml-7 space-y-1">
            <p className="text-primaryPurple">CITY OF ARABIA - DUBAI</p>
            <p className="text-primaryPurple">- UNITED ARAB EMIRATES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 