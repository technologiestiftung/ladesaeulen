const fs = require('fs')
const d3 = require('d3')
const parser_sem = d3.dsvFormat(';')
const parser_com = d3.dsvFormat(',')
const turf = require('turf')

let master = []

let file2 = JSON.parse(fs.readFileSync('./data/openchargemap_final.json', 'utf8'))

file2.forEach(f=>{
	master.push(turf.point(
		[parseFloat(f.AddressInfo.Longitude),parseFloat(f.AddressInfo.Latitude)],
		{
			source:'openchargemap',
			data:f,
			id:master.length,
			duplicate:false
		}
	))
})

// "data": {
//     "AddressInfo": {
//         "AccessComments": "24/7 nutzbar mit The New Motion Ladekarte oder von Roamingpartnern. 2 nicht reservierte Parkplätze am Straßenrand neben der grauen Ladesäule vor dem gelben Schild \"Berlin Dungeon\". ",
//         "AddressLine1": "Spandauer Straße",
//         "AddressLine2": "Mitte",
//         "ContactEmail": null,
//         "ContactTelephone1": null,
//         "ContactTelephone2": null,
//         "Country": {
//             "ContinentCode": "EU",
//             "ID": 87,
//             "ISOCode": "DE",
//             "Title": "Germany"
//         },
//         "CountryID": 87,
//         "Distance": 0.07192644334394928,
//         "DistanceUnit": 2,
//         "ID": 66171,
//         "Latitude": 52.5208455657791,
//         "Longitude": 13.4039381981476,
//         "Postcode": "10178",
//         "RelatedURL": null,
//         "StateOrProvince": "Berlin",
//         "Title": "Spandauer Straße",
//         "Town": "Berlin"
//     },
//     "Connections": [
//         {
//             "Amps": 16,
//             "Comments": null,
//             "ConnectionType": {
//                 "FormalName": "IEC 62196-2 Type 2",
//                 "ID": 25,
//                 "IsDiscontinued": false,
//                 "IsObsolete": false,
//                 "Title": "Mennekes (Type 2)"
//             },
//             "ConnectionTypeID": 25,
//             "CurrentType": {
//                 "Description": "Alternating Current - Three Phase",
//                 "ID": 20,
//                 "Title": "AC (Three-Phase)"
//             },
//             "CurrentTypeID": 20,
//             "ID": 90969,
//             "Level": {
//                 "Comments": "Over 2 kW, usually non-domestic socket type",
//                 "ID": 2,
//                 "IsFastChargeCapable": false,
//                 "Title": "Level 2 : Medium (Over 2kW)"
//             },
//             "LevelID": 2,
//             "PowerKW": 11,
//             "Quantity": 2,
//             "Reference": null,
//             "StatusType": {
//                 "ID": 50,
//                 "IsOperational": true,
//                 "IsUserSelectable": true,
//                 "Title": "Operational"
//             },
//             "StatusTypeID": 50,
//             "Voltage": 400
//         }
//     ],
//     "DataProvider": {
//         "Comments": null,
//         "DataProviderStatusType": {
//             "ID": 1,
//             "IsProviderEnabled": true,
//             "Title": "Manual Data Entry"
//         },
//         "DateLastImported": null,
//         "ID": 1,
//         "IsApprovedImport": true,
//         "IsOpenDataLicensed": true,
//         "IsRestrictedEdit": false,
//         "License": "Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
//         "Title": "Open Charge Map Contributors",
//         "WebsiteURL": "http://openchargemap.org"
//     },
//     "DataProviderID": 1,
//     "DataProvidersReference": null,
//     "DataQualityLevel": 1,
//     "DateCreated": "2016-04-28T07:40:00Z",
//     "DateLastConfirmed": null,
//     "DateLastStatusUpdate": "2016-04-28T07:41:00Z",
//     "DateLastVerified": null,
//     "DatePlanned": null,
//     "GeneralComments": null,
//     "ID": 65825,
//     "IsRecentlyVerified": false,
//     "MediaItems": null,
//     "MetadataValues": null,
//     "NumberOfPoints": 2,
//     "OperatorID": 214,
//     "OperatorInfo": {
//         "AddressInfo": null,
//         "BookingURL": null,
//         "Comments": null,
//         "ContactEmail": "dialog@be-emobil.de",
//         "FaultReportEmail": null,
//         "ID": 214,
//         "IsPrivateIndividual": false,
//         "IsRestrictedEdit": false,
//         "PhonePrimaryContact": "+49 30 20847590",
//         "PhoneSecondaryContact": null,
//         "Title": "be emobil",
//         "WebsiteURL": "http://www.be-emobil.de/"
//     },
//     "OperatorsReference": null,
//     "ParentChargePointID": null,
//     "PercentageSimilarity": null,
//     "StatusType": {
//         "ID": 50,
//         "IsOperational": true,
//         "IsUserSelectable": true,
//         "Title": "Operational"
//     },
//     "StatusTypeID": 50,
//     "SubmissionStatus": {
//         "ID": 200,
//         "IsLive": true,
//         "Title": "Submission Published"
//     },
//     "SubmissionStatusTypeID": 200,
//     "UUID": "13BCA65C-8A6F-4996-995E-84207E2E4424",
//     "UsageCost": null,
//     "UsageType": {
//         "ID": 4,
//         "IsAccessKeyRequired": true,
//         "IsMembershipRequired": true,
//         "IsPayAtLocation": false,
//         "Title": "Public - Membership Required"
//     },
//     "UsageTypeID": 4,
//     "UserComments": null
// },

let file1 = JSON.parse(fs.readFileSync('./data/allegoBerlin.json', 'utf8'))

file1.forEach(f=>{
	master.push(turf.point(
		[parseFloat(f.lng), parseFloat(f.lat)],
		{
			source:'allegoBerlin',
			data:f,
			id:master.length,
			duplicate:false
		}
	))
})

// "chargetype": "AC krachtstroom",
// "city": "Berlin",
// "connectortype": "mennekes",
// "country": "DE",
// "id": "133568",
// "lat": "52.49625015",
// "lng": "13.46753979",
// "name": "AllegoDE DEALLEGO000921",
// "owner": "Allego",
// "power": "11.0",
// "pricemethod": "jaarabonnement",
// "realtimestatus": "1",
// "vehicle": "auto"

let file3 = parser_com.parse(fs.readFileSync('./data/netzagentur_final.csv', 'utf8'))

file3.forEach(f=>{
	master.push(turf.point(
		[parseFloat(f['Längengrad [DG]'].replace(',','.')),parseFloat(f['Breitengrad [DG]'].replace(',','.'))],
		{
			source:'netzagentur',
			data:f,
			id:master.length,
			duplicate:false
		}
	))
})

// "": "",
// "Adresse": "Boyenstr. 23",
// "Anschlussleistung [kW]": "44",
// "Anzahl Ladepunkte": "2",
// "Art der Ladeeinrichtung": "Normalladeeinrichtung",
// "Betreiber": "innogy SE",
// "Breitengrad [DG]": "52,535955",
// "Inbetriebnahmedatum": "7/14/09",
// "Längengrad [DG]": "13,368842",
// "P1 [kW]": "22",
// "P2 [kW]": "22",
// "P3 [kW]": "",
// "P4 [kW]": "",
// "Postleitzahl Ort": "10115 Berlin",
// "Steckertypen 1": "AC Steckdose Typ 2",
// "Steckertypen 2": "AC Steckdose Typ 2",
// "Steckertypen 3": "",
// "Steckertypen 4": ""

let file4 = JSON.parse(fs.readFileSync('./data/vattenfall.json', 'utf8'))

file4.forEach(f=>{
	master.push(turf.point(
		[parseFloat(f['Geo Lng']),parseFloat(f['Geo Lat'])],
		{
			source:'vattenfall',
			data:f,
			id:master.length,
			duplicate:false
		}
	))
})

// "Bezirk": "Treptow-Köpenick",
// "Geo Lat": 52.457084,
// "Geo Lng": 13.527964,
// "ID (alt)": 2,
// "Koop Link": "http://www.elektroinnungberlin.de",
// "Koop Logo": "elektro-innung_berlin.gif",
// "Koop Partner Name": "Elektro-Innung Berlin",
// "Ladepunkte": "2 vorhanden",
// "Nutzbarkeit": "Werktags 07:00-16:00 Uhr",
// "PLZ Ort": "12459 Berlin",
// "Parkplatz Name": "Elektro-Innung Berlin",
// "Stecker Art": "Ladestation Express (16A/32A) Stecker: Typ2 & Schuko",
// "Strasse + Nr": "Wilhelminenhofstr. 75",
// "Säulennr.": "015.011",
// "Zusatzinfo Kosten etc": "Kostenfreier Parkplatz auf dem Gelände der Elektro-Innung neben Villa Rathenau"


//Go through the file and remove from top down (keep openchargemap if possible)

let i = 0
while(i<master.length){
	let j = i+1
	while(j<master.length){
		if(master[i].properties.source != master[j].properties.source){
			let d = turf.distance(master[i], master[j])
			if(d == 0){
				master.splice(j,1)
			}else if(d<0.001){
				if(master[i].properties.source == 'allegoBerlin' && master[j].properties.source == 'netzagentur' && master[j].properties.data.Betreiber == 'Allego GmbH'){
					master[j].properties['merge'] = master[i].properties
					master.splice(i,1)
					j = master.length
					i--
				}else{
					//console.log(d,i,j,master[i].properties.id, master[j].properties.id, master[i].properties.source,master[j].properties.source)
					master[j].properties['duplicate'] = true
				}
			}
		}
		j++
	}
	i++
}

fs.writeFileSync('./output/stations.json', JSON.stringify(turf.featureCollection(master)))