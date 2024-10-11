
import { useEffect, useState } from 'react';
import currency from './assets/doller.png';
import axios from 'axios';
function App() {

  const currencyAbbreviations = [
    "INR", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", 
    "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", 
    "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", 
    "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", 
    "HUF", "IDR", "ILS", "IMP", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", 
    "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", 
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", 
    "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", 
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", 
    "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", 
    "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
  ];
  const currencyCountries = {
    "INR": "India",
    "AED": "United Arab Emirates",
    "AFN": "Afghanistan",
    "ALL": "Albania",
    "AMD": "Armenia",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angola",
    "ARS": "Argentina",
    "AUD": "Australia",
    "AWG": "Aruba",
    "AZN": "Azerbaijan",
    "BAM": "Bosnia and Herzegovina",
    "BBD": "Barbados",
    "BDT": "Bangladesh",
    "BGN": "Bulgaria",
    "BHD": "Bahrain",
    "BIF": "Burundi",
    "BMD": "Bermuda",
    "BND": "Brunei",
    "BOB": "Bolivia",
    "BRL": "Brazil",
    "BSD": "Bahamas",
    "BTN": "Bhutan",
    "BWP": "Botswana",
    "BYN": "Belarus",
    "BZD": "Belize",
    "CAD": "Canada",
    "CDF": "Democratic Republic of the Congo",
    "CHF": "Switzerland",
    "CLP": "Chile",
    "CNY": "China",
    "COP": "Colombia",
    "CRC": "Costa Rica",
    "CUP": "Cuba",
    "CVE": "Cape Verde",
    "CZK": "Czech Republic",
    "DJF": "Djibouti",
    "DKK": "Denmark",
    "DOP": "Dominican Republic",
    "DZD": "Algeria",
    "EGP": "Egypt",
    "ERN": "Eritrea",
    "ETB": "Ethiopia",
    "EUR": "Eurozone",
    "FJD": "Fiji",
    "FKP": "Falkland Islands",
    "FOK": "Faroe Islands",
    "GBP": "United Kingdom",
    "GEL": "Georgia",
    "GGP": "Guernsey",
    "GHS": "Ghana",
    "GIP": "Gibraltar",
    "GMD": "Gambia",
    "GNF": "Guinea",
    "GTQ": "Guatemala",
    "GYD": "Guyana",
    "HKD": "Hong Kong",
    "HNL": "Honduras",
    "HRK": "Croatia",
    "HTG": "Haiti",
    "HUF": "Hungary",
    "IDR": "Indonesia",
    "ILS": "Israel",
    "IMP": "Isle of Man",
    "IQD": "Iraq",
    "IRR": "Iran",
    "ISK": "Iceland",
    "JEP": "Jersey",
    "JMD": "Jamaica",
    "JOD": "Jordan",
    "JPY": "Japan",
    "KES": "Kenya",
    "KGS": "Kyrgyzstan",
    "KHR": "Cambodia",
    "KID": "Kiribati",
    "KMF": "Comoros",
    "KRW": "South Korea",
    "KWD": "Kuwait",
    "KYD": "Cayman Islands",
    "KZT": "Kazakhstan",
    "LAK": "Laos",
    "LBP": "Lebanon",
    "LKR": "Sri Lanka",
    "LRD": "Liberia",
    "LSL": "Lesotho",
    "LYD": "Libya",
    "MAD": "Morocco",
    "MDL": "Moldova",
    "MGA": "Madagascar",
    "MKD": "North Macedonia",
    "MMK": "Myanmar",
    "MNT": "Mongolia",
    "MOP": "Macau",
    "MRU": "Mauritania",
    "MUR": "Mauritius",
    "MVR": "Maldives",
    "MWK": "Malawi",
    "MXN": "Mexico",
    "MYR": "Malaysia",
    "MZN": "Mozambique",
    "NAD": "Namibia",
    "NGN": "Nigeria",
    "NIO": "Nicaragua",
    "NOK": "Norway",
    "NPR": "Nepal",
    "NZD": "New Zealand",
    "OMR": "Oman",
    "PAB": "Panama",
    "PEN": "Peru",
    "PGK": "Papua New Guinea",
    "PHP": "Philippines",
    "PKR": "Pakistan",
    "PLN": "Poland",
    "PYG": "Paraguay",
    "QAR": "Qatar",
    "RON": "Romania",
    "RSD": "Serbia",
    "RUB": "Russia",
    "RWF": "Rwanda",
    "SAR": "Saudi Arabia",
    "SBD": "Solomon Islands",
    "SCR": "Seychelles",
    "SDG": "Sudan",
    "SEK": "Sweden",
    "SGD": "Singapore",
    "SHP": "Saint Helena",
    "SLE": "Sierra Leone",
    "SLL": "Sierra Leone",
    "SOS": "Somalia",
    "SRD": "Suriname",
    "SSP": "South Sudan",
    "STN": "São Tomé and Príncipe",
    "SYP": "Syria",
    "SZL": "Eswatini",
    "THB": "Thailand",
    "TJS": "Tajikistan",
    "TMT": "Turkmenistan",
    "TND": "Tunisia",
    "TOP": "Tonga",
    "TRY": "Turkey",
    "TTD": "Trinidad and Tobago",
    "TVD": "Tuvalu",
    "TWD": "Taiwan",
    "TZS": "Tanzania",
    "UAH": "Ukraine",
    "UGX": "Uganda",
    "USD": "United States",
    "UYU": "Uruguay",
    "UZS": "Uzbekistan",
    "VES": "Venezuela",
    "VND": "Vietnam",
    "VUV": "Vanuatu",
    "WST": "Samoa",
    "XAF": "Central African CFA Franc",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights (IMF)",
    "XOF": "West African CFA Franc",
    "XPF": "CFP Franc",
    "YER": "Yemen",
    "ZAR": "South Africa",
    "ZMW": "Zambia",
    "ZWL": "Zimbabwe"
  };
  
  const [loading,setLoading]=useState(false);
  const [frc,setFrc]=useState('USD');
  const [toc,setToc]=useState('INR');
  const [amount,setAmount]=useState(1);
  const[exRate,setExRate]=useState()

  useEffect(()=>{
    const exchangeRate=async ()=>{
      try {
       let url=`https://api.exchangerate-api.com./v4/latest/${frc}`;
       setLoading(true)
        const apiResult=await axios.get(url);
       const tocRate=apiResult.data.rates[toc];
       setExRate(amount*tocRate);
        
        setLoading(false);
       
      } catch (error) {
       console.log(error);
       
      }
   }
   exchangeRate();

  },[toc,frc,amount])
 
  function amthandle(e){
    setAmount(e.target.value);
  }
  function tochandle(e){
    setToc(e.target.value);
  }
  function frchandle(e){
    setFrc(e.target.value)
  }

  return (
    <>
     <div className="container">
      <div className="border"></div>
      <div className="currency-converter">
        <img src={currency} alt="" />
        <h3>Currency Converter</h3>
        <div className="amount">
          <label htmlFor="amt">Amount :</label>
          <input type="number" name="" id="amt" value={amount} onChange={amthandle}/>
        </div>
        <div className="fromcurrency">
          <label htmlFor="frc">From Currency :</label>
          <select name="" id="frc" value={frc} onChange={frchandle}>

            {currencyAbbreviations.map((abb,index)=>{
              return <option key={index} value={abb}>{abb}-{currencyCountries[abb]}</option>
            })}
            
   
          </select>
        </div>
        <div className="tocurrency">
          <label htmlFor="toc">To Currency :</label>
          <select name="" id="toc" value={toc} onChange={tochandle}>
          {currencyAbbreviations.map((abb,index)=>{
              return <option key={index} value={abb}>{abb}-{currencyCountries[abb]}</option>
            })}
          </select>
        </div>

        <div className="result">
         {!loading && <h4>{amount} {frc} is equal to {exRate} {toc} </h4> } 
          {loading && <div className="loader"></div>}
        </div>
        <div className="copyright">
          <p>Designed & Developed by</p>
          <a target='_blank' href="https://appsail-50022521443.development.catalystappsail.in/">Sj Developer</a>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
