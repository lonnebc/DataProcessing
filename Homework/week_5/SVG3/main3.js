// use this to test out your function 
window.onload = function() {


	var birth_rate = [["AFG", "76.7336"], ["ALB", "21.4896"], ["DZA", "10.7914"], ["ASM", ".."], ["ADO", ".."], ["AGO", "166.6028"], ["ATG", "45.6642"], ["ARG", "63.8512"], ["ARM", "23.5084"], ["ABW", "23.122"], ["AUS", "14.405"], ["AUT", "7.379"], ["AZE", "58.5604"], ["BHS", "30.526"], ["BHR", "13.5426"], ["BGD", "83.49"], ["BRB", "41.9272"], ["BLR", "18.84"], ["BEL", "8.3764"], ["BLZ", "66.673"], ["BEN", "84.59"], ["BMU", ".."], ["BTN", "22.694"], ["BOL", "71.147"], ["BIH", "9.1124"], ["BWA", "33.6482"], ["BRA", "67.3106"], ["BRN", "21.1164"], ["BGR", "38.5874"], ["BFA", "109.9036"], ["BDI", "28.6552"], ["CPV", "73.6546"], ["KHM", "51.0532"], ["CMR", "106.853"], ["CAN", "10.0832"], ["CYM", ".."], ["CAF", "93.2172"], ["TCD", "137.173"], ["CHI", "7.1408"], ["CHL", "48.1088"], ["CHN", "7.3478"], ["COL", "51.6738"], ["COM", "69.5516"], ["ZAR", "122.9484"], ["COG", "119.234"], ["CRI", "57.0388"], ["CIV", "135.464"], ["HRV", "9.925"], ["CUB", "46.1674"], ["CUW", "34.4964"], ["CYP", "5.0858"], ["CZE", "10.1304"], ["DNK", "4.1192"], ["DJI", "21.8254"], ["DMA", ".."], ["DOM", "98.4344"], ["ECU", "76.1726"], ["EGY", "52.4352"], ["SLV", "65.5554"], ["GNQ", "109.7974"], ["ERI", "55.6712"], ["EST", "13.6678"], ["ETH", "60.1198"], ["FRO", ".."], ["FJI", "44.4298"], ["FIN", "6.6682"], ["FRA", "9.0482"], ["PYF", "36.4528"], ["GAB", "102.2"], ["GMB", "113.5836"], ["GEO", "41.1308"], ["DEU", "6.9604"], ["GHA", "67.5004"], ["GRC", "7.6694"], ["GRL", ".."], ["GRD", "31.4956"], ["GUM", "48.7892"], ["GTM", "81.404"], ["GIN", "141.6722"], ["GNB", "91.3858"], ["GUY", "88.4178"], ["HTI", "39.675"], ["HND", "65.6586"], ["HKG", "3.2662"], ["HUN", "18.2126"], ["ISL", "6.48"], ["IND", "25.6746"], ["IDN", "50.001"], ["IRN", "27.0988"], ["IRQ", "83.2342"], ["IRL", "10.7732"], ["IMY", ".."], ["ISR", "10.0612"], ["ITA", "6.0838"], ["JAM", "60.5584"], ["JPN", "4.1584"], ["JOR", "23.7632"], ["KAZ", "28.586"], ["KEN", "91.531"], ["KIR", "17.9648"], ["PRK", "0.5608"], ["KOR", "1.6584"], ["KSV", ".."], ["KWT", "10.1472"], ["KGZ", "39.9964"], ["LAO", "64.541"], ["LVA", "13.978"], ["LBN", "12.6554"], ["LSO", "92.2794"], ["LBR", "110.5554"], ["LBY", "6.2138"], ["LIE", ".."], ["LTU", "11.6044"], ["LUX", "6.1496"], ["MAC", "3.4972"], ["MKD", "17.8554"], ["MDG", "117.494"], ["MWI", "136.972"], ["MYS", "13.3984"], ["MDV", "7.276"], ["MLI", "175.4438"], ["MLT", "16.8426"], ["MHL", ".."], ["MRT", "79.3816"], ["MUS", "28.5974"], ["MEX", "63.4592"], ["FSM", "15.6944"], ["MDA", "23.236"], ["MCO", ".."], ["MNG", "16.3448"], ["MNE", "12.464"], ["MAR", "32.0718"], ["MOZ", "142.5334"], ["MMR", "16.7116"], ["NAM", "77.4004"], ["NPL", "72.5268"], ["NLD", "4.0888"], ["NCL", "19.1588"], ["NZL", "23.9378"], ["NIC", "89.6316"], ["NER", "203.604"], ["NGA", "111.886"], ["MNP", ".."], ["NOR", "5.9398"], ["OMN", "8.5776"], ["PAK", "39.156"], ["PLW", ".."], ["PAN", "75.3262"], ["PNG", "55.251"], ["PRY", "57.9838"], ["PER", "49.6782"], ["PHL", "60.7682"], ["POL", "13.664"], ["PRT", "10.2834"], ["PRI", "42.8788"], ["QAT", "10.8858"], ["ROM", "35.12"], ["RUS", "24.1302"], ["RWA", "27.0462"], ["WSM", "25.6102"], ["SMR", ".."], ["STP", "85.168"], ["SAU", "9.233"], ["SEN", "80.2572"], ["SRB", "19.3334"], ["SYC", "57.9378"], ["SLE", "119.6006"], ["SGP", "3.8334"], ["SXM", ".."], ["SVK", "20.4052"], ["SVN", "3.9208"], ["SLB", "49.4696"], ["SOM", "105.2022"], ["ZAF", "46.5808"], ["SSD", "68.3108"], ["ESP", "8.522"], ["LKA", "15.361"], ["KNA", ".."], ["LCA", "54.3862"], ["MAF", ".."], ["VCT", "51.7248"], ["SDN", "76.022"], ["SUR", "46.5188"], ["SWZ", "73.6144"], ["SWE", "5.618"], ["CHE", "3.0578"], ["SYR", "40.0214"], ["TJK", "38.3492"], ["TZA", "119.3834"], ["THA", "44.6358"], ["TMP", "47.723"], ["TGO", "91.9554"], ["TON", "15.4404"], ["TTO", "32.1586"], ["TUN", "6.7968"], ["TUR", "28.416"], ["TKM", "16.6988"], ["TCA", ".."], ["TUV", ".."], ["UGA", "114.8464"], ["UKR", "24.885"], ["ARE", "29.2538"], ["GBR", "15.3342"], ["USA", "24.1102"], ["URY", "56.5144"], ["UZB", "17.8178"], ["VUT", "43.4342"], ["VEN", "79.6672"], ["VNM", "38.1194"], ["VIR", "44.1902"], ["WBG", "59.1422"], ["YEM", "62.2136"], ["ZMB", "93.0156"], ["ZWE", "110.4018"]]	
	// Author: Robin Kuiper
	// Date: 27 03 2014
	// List of ISO 3166-1 alpha 2 country codes and
	// their respective alpha 3 country codes and country names.
	var country_codes = [
	    ["af", "AFG", "Afghanistan"],
	    ["ax", "ALA", "Åland Islands"],
	    ["al", "ALB", "Albania"],
	    ["dz", "DZA", "Algeria"],
	    ["as", "ASM", "American Samoa"],
	    ["ad", "AND", "Andorra"],
	    ["ao", "AGO", "Angola"],
	    ["ai", "AIA", "Anguilla"],
	    ["aq", "ATA", "Antarctica"],
	    ["ag", "ATG", "Antigua and Barbuda"],
	    ["ar", "ARG", "Argentina"],
	    ["am", "ARM", "Armenia"],
	    ["aw", "ABW", "Aruba"],
	    ["au", "AUS", "Australia"],
	    ["at", "AUT", "Austria"],
	    ["az", "AZE", "Azerbaijan"],
	    ["bs", "BHS", "Bahamas"],
	    ["bh", "BHR", "Bahrain"],
	    ["bd", "BGD", "Bangladesh"],
	    ["bb", "BRB", "Barbados"],
	    ["by", "BLR", "Belarus"],
	    ["be", "BEL", "Belgium"],
	    ["bz", "BLZ", "Belize"],
	    ["bj", "BEN", "Benin"],
	    ["bm", "BMU", "Bermuda"],
	    ["bt", "BTN", "Bhutan"],
	    ["bo", "BOL", "Bolivia, Plurinational State of"],
	    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
	    ["ba", "BIH", "Bosnia and Herzegovina"],
	    ["bw", "BWA", "Botswana"],
	    ["bv", "BVT", "Bouvet Island"],
	    ["br", "BRA", "Brazil"],
	    ["io", "IOT", "British Indian Ocean Territory"],
	    ["bn", "BRN", "Brunei Darussalam"],
	    ["bg", "BGR", "Bulgaria"],
	    ["bf", "BFA", "Burkina Faso"],
	    ["bi", "BDI", "Burundi"],
	    ["kh", "KHM", "Cambodia"],
	    ["cm", "CMR", "Cameroon"],
	    ["ca", "CAN", "Canada"],
	    ["cv", "CPV", "Cape Verde"],
	    ["ky", "CYM", "Cayman Islands"],
	    ["cf", "CAF", "Central African Republic"],
	    ["td", "TCD", "Chad"],
	    ["cl", "CHL", "Chile"],
	    ["cn", "CHN", "China"],
	    ["cx", "CXR", "Christmas Island"],
	    ["cc", "CCK", "Cocos (Keeling) Islands"],
	    ["co", "COL", "Colombia"],
	    ["km", "COM", "Comoros"],
	    ["cg", "COG", "Congo"],
	    ["cd", "COD", "Congo, the Democratic Republic of the"],
	    ["ck", "COK", "Cook Islands"],
	    ["cr", "CRI", "Costa Rica"],
	    ["ci", "CIV", "Côte d'Ivoire"],
	    ["hr", "HRV", "Croatia"],
	    ["cu", "CUB", "Cuba"],
	    ["cw", "CUW", "Curaçao"],
	    ["cy", "CYP", "Cyprus"],
	    ["cz", "CZE", "Czech Republic"],
	    ["dk", "DNK", "Denmark"],
	    ["dj", "DJI", "Djibouti"],
	    ["dm", "DMA", "Dominica"],
	    ["do", "DOM", "Dominican Republic"],
	    ["ec", "ECU", "Ecuador"],
	    ["eg", "EGY", "Egypt"],
	    ["sv", "SLV", "El Salvador"],
	    ["gq", "GNQ", "Equatorial Guinea"],
	    ["er", "ERI", "Eritrea"],
	    ["ee", "EST", "Estonia"],
	    ["et", "ETH", "Ethiopia"],
	    ["fk", "FLK", "Falkland Islands (Malvinas)"],
	    ["fo", "FRO", "Faroe Islands"],
	    ["fj", "FJI", "Fiji"],
	    ["fi", "FIN", "Finland"],
	    ["fr", "FRA", "France"],
	    ["gf", "GUF", "French Guiana"],
	    ["pf", "PYF", "French Polynesia"],
	    ["tf", "ATF", "French Southern Territories"],
	    ["ga", "GAB", "Gabon"],
	    ["gm", "GMB", "Gambia"],
	    ["ge", "GEO", "Georgia"],
	    ["de", "DEU", "Germany"],
	    ["gh", "GHA", "Ghana"],
	    ["gi", "GIB", "Gibraltar"],
	    ["gr", "GRC", "Greece"],
	    ["gl", "GRL", "Greenland"],
	    ["gd", "GRD", "Grenada"],
	    ["gp", "GLP", "Guadeloupe"],
	    ["gu", "GUM", "Guam"],
	    ["gt", "GTM", "Guatemala"],
	    ["gg", "GGY", "Guernsey"],
	    ["gn", "GIN", "Guinea"],
	    ["gw", "GNB", "Guinea-Bissau"],
	    ["gy", "GUY", "Guyana"],
	    ["ht", "HTI", "Haiti"],
	    ["hm", "HMD", "Heard Island and McDonald Islands"],
	    ["va", "VAT", "Holy See (Vatican City State)"],
	    ["hn", "HND", "Honduras"],
	    ["hk", "HKG", "Hong Kong"],
	    ["hu", "HUN", "Hungary"],
	    ["is", "ISL", "Iceland"],
	    ["in", "IND", "India"],
	    ["id", "IDN", "Indonesia"],
	    ["ir", "IRN", "Iran, Islamic Republic of"],
	    ["iq", "IRQ", "Iraq"],
	    ["ie", "IRL", "Ireland"],
	    ["im", "IMN", "Isle of Man"],
	    ["il", "ISR", "Israel"],
	    ["it", "ITA", "Italy"],
	    ["jm", "JAM", "Jamaica"],
	    ["jp", "JPN", "Japan"],
	    ["je", "JEY", "Jersey"],
	    ["jo", "JOR", "Jordan"],
	    ["kz", "KAZ", "Kazakhstan"],
	    ["ke", "KEN", "Kenya"],
	    ["ki", "KIR", "Kiribati"],
	    ["kp", "PRK", "Korea, Democratic People's Republic of"],
	    ["kr", "KOR", "Korea, Republic of"],
	    ["kw", "KWT", "Kuwait"],
	    ["kg", "KGZ", "Kyrgyzstan"],
	    ["la", "LAO", "Lao People's Democratic Republic"],
	    ["lv", "LVA", "Latvia"],
	    ["lb", "LBN", "Lebanon"],
	    ["ls", "LSO", "Lesotho"],
	    ["lr", "LBR", "Liberia"],
	    ["ly", "LBY", "Libya"],
	    ["li", "LIE", "Liechtenstein"],
	    ["lt", "LTU", "Lithuania"],
	    ["lu", "LUX", "Luxembourg"],
	    ["mo", "MAC", "Macao"],
	    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
	    ["mg", "MDG", "Madagascar"],
	    ["mw", "MWI", "Malawi"],
	    ["my", "MYS", "Malaysia"],
	    ["mv", "MDV", "Maldives"],
	    ["ml", "MLI", "Mali"],
	    ["mt", "MLT", "Malta"],
	    ["mh", "MHL", "Marshall Islands"],
	    ["mq", "MTQ", "Martinique"],
	    ["mr", "MRT", "Mauritania"],
	    ["mu", "MUS", "Mauritius"],
	    ["yt", "MYT", "Mayotte"],
	    ["mx", "MEX", "Mexico"],
	    ["fm", "FSM", "Micronesia, Federated States of"],
	    ["md", "MDA", "Moldova, Republic of"],
	    ["mc", "MCO", "Monaco"],
	    ["mn", "MNG", "Mongolia"],
	    ["me", "MNE", "Montenegro"],
	    ["ms", "MSR", "Montserrat"],
	    ["ma", "MAR", "Morocco"],
	    ["mz", "MOZ", "Mozambique"],
	    ["mm", "MMR", "Myanmar"],
	    ["na", "NAM", "Namibia"],
	    ["nr", "NRU", "Nauru"],
	    ["np", "NPL", "Nepal"],
	    ["nl", "NLD", "Netherlands"],
	    ["nc", "NCL", "New Caledonia"],
	    ["nz", "NZL", "New Zealand"],
	    ["ni", "NIC", "Nicaragua"],
	    ["ne", "NER", "Niger"],
	    ["ng", "NGA", "Nigeria"],
	    ["nu", "NIU", "Niue"],
	    ["nf", "NFK", "Norfolk Island"],
	    ["mp", "MNP", "Northern Mariana Islands"],
	    ["no", "NOR", "Norway"],
	    ["om", "OMN", "Oman"],
	    ["pk", "PAK", "Pakistan"],
	    ["pw", "PLW", "Palau"],
	    ["ps", "PSE", "Palestine, State of"],
	    ["pa", "PAN", "Panama"],
	    ["pg", "PNG", "Papua New Guinea"],
	    ["py", "PRY", "Paraguay"],
	    ["pe", "PER", "Peru"],
	    ["ph", "PHL", "Philippines"],
	    ["pn", "PCN", "Pitcairn"],
	    ["pl", "POL", "Poland"],
	    ["pt", "PRT", "Portugal"],
	    ["pr", "PRI", "Puerto Rico"],
	    ["qa", "QAT", "Qatar"],
	    ["re", "REU", "Réunion"],
	    ["ro", "ROU", "Romania"],
	    ["ru", "RUS", "Russian Federation"],
	    ["rw", "RWA", "Rwanda"],
	    ["bl", "BLM", "Saint Barthélemy"],
	    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
	    ["kn", "KNA", "Saint Kitts and Nevis"],
	    ["lc", "LCA", "Saint Lucia"],
	    ["mf", "MAF", "Saint Martin (French part)"],
	    ["pm", "SPM", "Saint Pierre and Miquelon"],
	    ["vc", "VCT", "Saint Vincent and the Grenadines"],
	    ["ws", "WSM", "Samoa"],
	    ["sm", "SMR", "San Marino"],
	    ["st", "STP", "Sao Tome and Principe"],
	    ["sa", "SAU", "Saudi Arabia"],
	    ["sn", "SEN", "Senegal"],
	    ["rs", "SRB", "Serbia"],
	    ["sc", "SYC", "Seychelles"],
	    ["sl", "SLE", "Sierra Leone"],
	    ["sg", "SGP", "Singapore"],
	    ["sx", "SXM", "Sint Maarten (Dutch part)"],
	    ["sk", "SVK", "Slovakia"],
	    ["si", "SVN", "Slovenia"],
	    ["sb", "SLB", "Solomon Islands"],
	    ["so", "SOM", "Somalia"],
	    ["za", "ZAF", "South Africa"],
	    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
	    ["ss", "SSD", "South Sudan"],
	    ["es", "ESP", "Spain"],
	    ["lk", "LKA", "Sri Lanka"],
	    ["ss", "SDN", "Sudan"],
	    ["sr", "SUR", "Suriname"],
	    ["sj", "SJM", "Svalbard and Jan Mayen"],
	    ["sz", "SWZ", "Swaziland"],
	    ["se", "SWE", "Sweden"],
	    ["ch", "CHE", "Switzerland"],
	    ["sy", "SYR", "Syrian Arab Republic"],
	    ["tw", "TWN", "Taiwan, Province of China"],
	    ["tj", "TJK", "Tajikistan"],
	    ["tz", "TZA", "Tanzania, United Republic of"],
	    ["th", "THA", "Thailand"],
	    ["tl", "TLS", "Timor-Leste"],
	    ["tg", "TGO", "Togo"],
	    ["tk", "TKL", "Tokelau"],
	    ["to", "TON", "Tonga"],
	    ["tt", "TTO", "Trinidad and Tobago"],
	    ["tn", "TUN", "Tunisia"],
	    ["tr", "TUR", "Turkey"],
	    ["tm", "TKM", "Turkmenistan"],
	    ["tc", "TCA", "Turks and Caicos Islands"],
	    ["tv", "TUV", "Tuvalu"],
	    ["ug", "UGA", "Uganda"],
	    ["ua", "UKR", "Ukraine"],
	    ["ae", "ARE", "United Arab Emirates"],
	    ["gb", "GBR", "United Kingdom"],
	    ["us", "USA", "United States"],
	    ["um", "UMI", "United States Minor Outlying Islands"],
	    ["uy", "URY", "Uruguay"],
	    ["uz", "UZB", "Uzbekistan"],
	    ["vu", "VUT", "Vanuatu"],
	    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
	    ["vn", "VNM", "Viet Nam"],
	    ["vg", "VGB", "Virgin Islands, British"],
	    ["vi", "VIR", "Virgin Islands, U.S."],
	    ["wf", "WLF", "Wallis and Futuna"],
	    ["eh", "ESH", "Western Sahara"],
	    ["ye", "YEM", "Yemen"],
	    ["zm", "ZMB", "Zambia"],
	    ["zw", "ZWE", "Zimbabwe"] ];

	// variable for the two-coded land-code
	var two_code = "None"

	for (var i = 0; i < birth_rate.length; i++){
		for (var j = 0; j < country_codes.length; j++){
			if (birth_rate[i][0] == country_codes[j][1]){
				var two_code = country_codes[j][0];
				// take two_code and birthrate to function changeColor
				changeColor(two_code, birth_rate[i][1]);
			}
		}
	}
}


/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, rate) {
  	
	var element = document.getElementById(id);
	rate = Math.round((rate * 0.1));
    
    // when country has any islands
 	if (element.nodeName == "g"){
 		var path = document.getElementById(id).getElementsByTagName("path");
 		for (p = 0, q = path.length; p < q; p++){
 			if (rate > 12){
				path[p].style.fill = '#512900';
			}
			else if (rate >= 11 && rate <= 12){
				path[p].style.fill = '#854300';
			}
			else if (rate >= 9 && rate <= 10){
				path[p].style.fill = '#8F4800';
			}
			else if (rate >= 7 && rate <= 8){
				path[p].style.fill = '#D16900';
			}
			else if (rate >= 5 && rate <= 6){
				path[p].style.fill = '#FF9C38';
			}
			else if (rate >= 3 && rate <= 4){
				path[p].style.fill = '#FFB56B';
			}
			else if (rate >= 0 && rate <= 2){
				path[p].style.fill = '#FFC58A';
			}
			else {
				path[p].style.fill = 'grey';
			}	
 		}
 	}
 	// when country does not have any islands
 	else {
			if (rate > 12){
				element.style.fill = '#512900';
			}
			else if (rate >= 11 && rate <= 12){
				element.style.fill = '#854300';
			}			
			else if (rate >= 9 && rate <= 10){
				element.style.fill = '#8F4800';
			}
			else if (rate >= 7 && rate <= 8){
				element.style.fill = '#D16900';
			}
			else if (rate >= 5 && rate <= 6){
				element.style.fill = '#FF9C38';
			}
			else if (rate >= 3 && rate <= 4){
				element.style.fill = '#FFB56B';
			}
			else if (rate >= 0 && rate <= 2){
				element.style.fill = '#FFC58A';
			}
			else {
				element.style.fill = 'grey';
			}
	}
		
}













