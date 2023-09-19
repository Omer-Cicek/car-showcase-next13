'use client';
import { SearchManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

const SearchManifacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManifacturer;
