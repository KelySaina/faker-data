import { faker } from '@faker-js/faker';
import { Category } from '../types';

export const generateCategories = (): Category[] => {
  return [
    {
      id: 'person',
      name: 'Person',
      icon: 'user',
      fields: [
        { id: 'firstName', name: 'First Name', path: 'person.firstName', example: faker.person.firstName() },
        { id: 'lastName', name: 'Last Name', path: 'person.lastName', example: faker.person.lastName() },
        { id: 'fullName', name: 'Full Name', path: 'person.fullName', example: faker.person.fullName() },
        { id: 'gender', name: 'Gender', path: 'person.gender', example: faker.person.gender() },
        { id: 'jobTitle', name: 'Job Title', path: 'person.jobTitle', example: faker.person.jobTitle() },
        { id: 'jobType', name: 'Job Type', path: 'person.jobType', example: faker.person.jobType() },
        { id: 'bio', name: 'Bio', path: 'person.bio', example: faker.person.bio() },
        { id: 'zodiacSign', name: 'Zodiac Sign', path: 'person.zodiacSign', example: faker.person.zodiacSign() }
      ]
    },
    {
      id: 'internet',
      name: 'Internet',
      icon: 'globe',
      fields: [
        { id: 'email', name: 'Email', path: 'internet.email', example: faker.internet.email() },
        { id: 'userName', name: 'Username', path: 'internet.userName', example: faker.internet.userName() },
        { id: 'password', name: 'Password', path: 'internet.password', example: faker.internet.password() },
        { id: 'url', name: 'URL', path: 'internet.url', example: faker.internet.url() },
        { id: 'domainName', name: 'Domain Name', path: 'internet.domainName', example: faker.internet.domainName() },
        { id: 'ipv4', name: 'IPv4', path: 'internet.ipv4', example: faker.internet.ipv4() },
        { id: 'ipv6', name: 'IPv6', path: 'internet.ipv6', example: faker.internet.ipv6() },
        { id: 'emoji', name: 'Emoji', path: 'internet.emoji', example: faker.internet.emoji() },
        { id: 'protocol', name: 'Protocol', path: 'internet.protocol', example: faker.internet.protocol() }
      ]
    },
    {
      id: 'phone',
      name: 'Phone',
      icon: 'phone',
      fields: [
        { id: 'number', name: 'Phone Number', path: 'phone.number', example: faker.phone.number() },
        { id: 'imei', name: 'IMEI', path: 'phone.imei', example: faker.phone.imei() }
      ]
    },
    {
      id: 'address',
      name: 'Address',
      icon: 'map-pin',
      fields: [
        { id: 'streetAddress', name: 'Street Address', path: 'location.streetAddress', example: faker.location.streetAddress() },
        { id: 'city', name: 'City', path: 'location.city', example: faker.location.city() },
        { id: 'state', name: 'State', path: 'location.state', example: faker.location.state() },
        { id: 'country', name: 'Country', path: 'location.country', example: faker.location.country() },
        { id: 'zipCode', name: 'Zip Code', path: 'location.zipCode', example: faker.location.zipCode() },
        { id: 'latitude', name: 'Latitude', path: 'location.latitude', example: faker.location.latitude() },
        { id: 'longitude', name: 'Longitude', path: 'location.longitude', example: faker.location.longitude() },
        { id: 'timeZone', name: 'Timezone', path: 'location.timeZone', example: faker.location.timeZone() },
        { id: 'county', name: 'County', path: 'location.county', example: faker.location.county() }
      ]
    },
    {
      id: 'commerce',
      name: 'Commerce',
      icon: 'shopping-cart',
      fields: [
        { id: 'product', name: 'Product', path: 'commerce.product', example: faker.commerce.product() },
        { id: 'productName', name: 'Product Name', path: 'commerce.productName', example: faker.commerce.productName() },
        { id: 'price', name: 'Price', path: 'commerce.price', example: faker.commerce.price() },
        { id: 'department', name: 'Department', path: 'commerce.department', example: faker.commerce.department() },
        { id: 'productAdjective', name: 'Product Adjective', path: 'commerce.productAdjective', example: faker.commerce.productAdjective() },
        { id: 'productMaterial', name: 'Product Material', path: 'commerce.productMaterial', example: faker.commerce.productMaterial() },
        { id: 'productDescription', name: 'Product Description', path: 'commerce.productDescription', example: faker.commerce.productDescription() }
      ]
    },
    {
      id: 'company',
      name: 'Company',
      icon: 'briefcase',
      fields: [
        { id: 'companyName', name: 'Company Name', path: 'company.name', example: faker.company.name() },
        { id: 'companySuffix', name: 'Company Suffix', path: 'company.suffixes', example: faker.company.suffixes()[0] },
        { id: 'catchPhrase', name: 'Catch Phrase', path: 'company.catchPhrase', example: faker.company.catchPhrase() },
        { id: 'bs', name: 'BS', path: 'company.bs', example: faker.company.bs() },
        { id: 'bsAdjective', name: 'BS Adjective', path: 'company.bsAdjective', example: faker.company.bsAdjective() },
        { id: 'bsBuzz', name: 'BS Buzz', path: 'company.bsBuzz', example: faker.company.bsBuzz() },
        { id: 'bsNoun', name: 'BS Noun', path: 'company.bsNoun', example: faker.company.bsNoun() }
      ]
    },
    {
      id: 'date',
      name: 'Date & Time',
      icon: 'calendar',
      fields: [
        { id: 'past', name: 'Past Date', path: 'date.past', example: faker.date.past().toISOString() },
        { id: 'future', name: 'Future Date', path: 'date.future', example: faker.date.future().toISOString() },
        { id: 'recent', name: 'Recent Date', path: 'date.recent', example: faker.date.recent().toISOString() },
        { id: 'month', name: 'Month', path: 'date.month', example: faker.date.month() },
        { id: 'weekday', name: 'Weekday', path: 'date.weekday', example: faker.date.weekday() },
        { id: 'birthdate', name: 'Birthdate', path: 'date.birthdate', example: faker.date.birthdate().toISOString() }
      ]
    }
  ];
};

// Helper function to get value from faker using a path string
export const getValueFromPath = (path: string): any => {
  const parts = path.split('.');
  if (parts.length !== 2) return null;
  
  const [namespace, method] = parts;
  
  try {
    // Handle special cases
    if (path === 'company.suffixes') {
      return faker.company.suffixes()[0];
    }
    
    if (faker[namespace] && typeof faker[namespace][method] === 'function') {
      return faker[namespace][method]();
    }
    
    return null;
  } catch (error) {
    console.error(`Error generating value for path: ${path}`, error);
    return null;
  }
};

export const generateData = (
  selectedCategories: string[],
  selectedFields: Record<string, string[]>,
  categories: Category[],
  count: number
): any[] => {
  const data = [];
  
  for (let i = 0; i < count; i++) {
    const record: Record<string, any> = {};
    
    for (const categoryId of selectedCategories) {
      const category = categories.find(c => c.id === categoryId);
      if (!category) continue;
      
      const fields = selectedFields[categoryId] || [];
      
      if (fields.length > 0) {
        record[categoryId] = {};
        
        for (const fieldId of fields) {
          const field = category.fields.find(f => f.id === fieldId);
          if (!field) continue;
          
          record[categoryId][fieldId] = getValueFromPath(field.path);
        }
      }
    }
    
    data.push(record);
  }
  
  return data;
};