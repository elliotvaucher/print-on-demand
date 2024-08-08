"use client";

import React, { useState } from 'react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: number | 'Custom';
  features: string[];
}

interface PricingPlanProps {
  name: string;
  price: number | 'Custom';
  features: string[];
  isSelected: boolean;
  onSelect: () => void;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, features, isSelected, onSelect }) => (
  <div 
    className={`p-6 rounded-lg cursor-pointer transition-all ${
      isSelected ? 'bg-indigo-100 ring-2 ring-indigo-600' : 'bg-white hover:bg-gray-50'
    }`}
    onClick={onSelect}
  >
    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900">{typeof price === 'number' ? `CHF ${price}` : price}</p>
    <ul className="mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const PricingComponentClient: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Standard');

  const plans: Plan[] = [
    { name: 'Séance Diana', price: 222, features: ['500 contacts', '5,000 emails/month', 'Basic analytics'] },
    { name: 'Séance Elliot', price: 222, features: ['2,500 contacts', '25,000 emails/month', 'Advanced analytics', 'Phone support'] },
    { name: 'Séance à deux', price: 350, features: ['10,000 contacts', '100,000 emails/month', 'Advanced analytics', '24/7 support'] },
    { name: 'Groupe', price: 108, features: ['Unlimited contacts', 'Unlimited emails', 'Custom solutions', 'Dedicated account manager'] },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos tarifs</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Sélectionnez l'offre qui vous convient le mieux</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PricingPlan
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>
        <div className="mt-16 mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{selectedPlan}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Plan pricing starts at {selectedPlan === 'Enterprise' ? 'a custom rate' : `CHF ${plans.find(p => p.name === selectedPlan)?.price}`}. 
              Select your audience size to calculate your price. The monthly email send limit for {selectedPlan} plans 
              is based on your maximum contact count.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What's included</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {plans.find(p => p.name === selectedPlan)?.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 p-8 sm:p-10 bg-gray-50 rounded-b-3xl">
            <a href="https://calendly.com/ritsl/coaching-developpement-personnel" className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Réservez {selectedPlan}
            </a>
            <p className="mt-6 text-xs leading-5 text-gray-600 text-center">
              Pricing details are for illustrative purposes only. Please contact sales for actual pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponentClient;