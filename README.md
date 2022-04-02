# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
2.7.3

* System dependencies
awls if you are using windows so you may be able to run ubuntu on your machine
intall ruby v 2.7.3
intall rails v
install graphql in the project



* DATABASE INITIALISATOION
mysql: set up to the codeboxx database server in amazong aws
postgres: set up to the codeboxx database server in amazong aws


* HOW TO TEST 
to tes we use postman to test our graphql
here are some exemples

"info": {
		"_postman_id": "1c9ec8f3-06e5-465f-a4e0-4636be5c76f7",
		"name": "graphql-api",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "https://supremerocketelevators.herokuapp.com/graphql",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "query{\r\n    adress(id:4){\r\n    \r\n     numberAndStreet\r\n     city\r\n     country\r\n    \r\n   }\r\n   interventions{\r\n     endDateAndTimeOfTheIntervention\r\n     startDateAndTimeOfTheIntervention\r\n     employeeID\r\n   }\r\n}\r\n",
						"variables": ""
					}
				},
				"url": {
					"raw": "https://supremerocketelevators.herokuapp.com/graphql",
					"protocol": "https",
					"host": [
						"supremerocketelevators",
						"herokuapp",
						"com"
					],
					"path": [
						"graphql"
					]
				}
			},
			"response": [
				{
					"name": "https://supremerocketelevators.herokuapp.com/graphql",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "graphql",
							"graphql": {
								"query": "query{\r\n    adress(id:4){\r\n    \r\n     numberAndStreet\r\n     city\r\n     country\r\n    \r\n   }\r\n   interventions{\r\n     endDateAndTimeOfTheIntervention\r\n     startDateAndTimeOfTheIntervention\r\n     employeeID\r\n   }\r\n}\r\n",
								"variables": ""
							}
						},
						"url": {
							"raw": "https://supremerocketelevators.herokuapp.com/graphql",
							"protocol": "https",
							"host": [
								"supremerocketelevators",
								"herokuapp",
								"com"
							],
							"path": [
								"graphql"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "Cowboy"
						},
						{
							"key": "Date",
							"value": "Sat, 02 Apr 2022 03:16:58 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "X-Frame-Options",
							"value": "SAMEORIGIN"
						},
						{
							"key": "X-Xss-Protection",
							"value": "0"
						},
						{
							"key": "X-Content-Type-Options",
							"value": "nosniff"
						},
						{
							"key": "X-Download-Options",
							"value": "noopen"
						},
						{
							"key": "X-Permitted-Cross-Domain-Policies",
							"value": "none"
						},
						{
							"key": "Referrer-Policy",
							"value": "strict-origin-when-cross-origin"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Vary",
							"value": "Accept"
						},
						{
							"key": "Etag",
							"value": "W/\"f2e9d699ab7457321c9eaa1f0984825a\""
						},
						{
							"key": "Cache-Control",
							"value": "max-age=0, private, must-revalidate"
						},
						{
							"key": "X-Request-Id",
							"value": "865616a3-468e-4419-85d0-b98fbaff34f0"
						},
						{
							"key": "X-Runtime",
							"value": "0.010932"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Via",
							"value": "1.1 vegur"
						}
					],
					"cookie": [],
					"body": "{\n    \"data\": {\n        \"interventions\": [\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-12T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-04-10T00:00:00Z\",\n                \"employeeID\": 1\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-06-04T00:00:00Z\",\n                \"employeeID\": 24\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-01T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-11-02T00:00:00Z\",\n                \"employeeID\": 12\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-24T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-12-11T00:00:00Z\",\n                \"employeeID\": 17\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-26T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-11-27T00:00:00Z\",\n                \"employeeID\": 21\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-10-09T00:00:00Z\",\n                \"employeeID\": 16\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-10T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-03-22T00:00:00Z\",\n                \"employeeID\": 2\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-09-28T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-01-08T00:00:00Z\",\n                \"employeeID\": 14\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-07T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-10-14T00:00:00Z\",\n                \"employeeID\": 12\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-11-06T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-06-16T00:00:00Z\",\n                \"employeeID\": 20\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-27T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-04-24T00:00:00Z\",\n                \"employeeID\": 12\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-26T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-06-28T00:00:00Z\",\n                \"employeeID\": 25\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-09T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-07-30T00:00:00Z\",\n                \"employeeID\": 3\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-15T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-06-05T00:00:00Z\",\n                \"employeeID\": 15\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-30T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-04-03T00:00:00Z\",\n                \"employeeID\": 15\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-07-09T00:00:00Z\",\n                \"employeeID\": 11\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-29T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-12-30T00:00:00Z\",\n                \"employeeID\": 10\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-18T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-11-11T00:00:00Z\",\n                \"employeeID\": 9\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-21T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2018-09-24T00:00:00Z\",\n                \"employeeID\": 16\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-15T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-08-22T00:00:00Z\",\n                \"employeeID\": 23\n            }\n        ],\n        \"adress\": {\n            \"numberAndStreet\": \"135 Plaza Dr\",\n            \"city\": \"Kerrville\",\n            \"country\": \"United States\"\n        }\n    }\n}"
				}
			]
		},
		{
			"name": "https://supremerocketelevators.herokuapp.com/graphql",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "query{\r\n    customer(id: 3){\r\n    \r\n     \r\ncompanyContactPhone\r\ncompanyDescription\r\ncompanyName\r\nemailOfTheCompanyContact\r\nfullNameOfServiveTechnicalAuthority\r\nfullNameOfTheCompanyContact\r\ntechnicalManagerEmailForService\r\ntechnicalManagerEmailForServive\r\n\r\n\r\n    \r\n   }\r\n   interventions{\r\n     endDateAndTimeOfTheIntervention\r\n     startDateAndTimeOfTheIntervention\r\n     batteryID\r\n    buildingID\r\n    columnID\r\n    elevatorID\r\n    employeeID\r\n    report\r\n    result\r\n    status\r\n\r\n   }\r\n}",
						"variables": ""
					}
				},
				"url": {
					"raw": "https://supremerocketelevators.herokuapp.com/graphql",
					"protocol": "https",
					"host": [
						"supremerocketelevators",
						"herokuapp",
						"com"
					],
					"path": [
						"graphql"
					]
				}
			},
			"response": [
				{
					"name": "https://supremerocketelevators.herokuapp.com/graphql",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "graphql",
							"graphql": {
								"query": "query{\r\n    customer(id: 3){\r\n    \r\n     \r\ncompanyContactPhone\r\ncompanyDescription\r\ncompanyName\r\nemailOfTheCompanyContact\r\nfullNameOfServiveTechnicalAuthority\r\nfullNameOfTheCompanyContact\r\ntechnicalManagerEmailForService\r\ntechnicalManagerEmailForServive\r\n\r\n\r\n    \r\n   }\r\n   interventions{\r\n     endDateAndTimeOfTheIntervention\r\n     startDateAndTimeOfTheIntervention\r\n     batteryID\r\n    buildingID\r\n    columnID\r\n    elevatorID\r\n    employeeID\r\n    report\r\n    result\r\n    status\r\n\r\n   }\r\n}",
								"variables": ""
							}
						},
						"url": {
							"raw": "https://supremerocketelevators.herokuapp.com/graphql",
							"protocol": "https",
							"host": [
								"supremerocketelevators",
								"herokuapp",
								"com"
							],
							"path": [
								"graphql"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "Cowboy"
						},
						{
							"key": "Date",
							"value": "Sat, 02 Apr 2022 03:25:55 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "X-Frame-Options",
							"value": "SAMEORIGIN"
						},
						{
							"key": "X-Xss-Protection",
							"value": "0"
						},
						{
							"key": "X-Content-Type-Options",
							"value": "nosniff"
						},
						{
							"key": "X-Download-Options",
							"value": "noopen"
						},
						{
							"key": "X-Permitted-Cross-Domain-Policies",
							"value": "none"
						},
						{
							"key": "Referrer-Policy",
							"value": "strict-origin-when-cross-origin"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Vary",
							"value": "Accept"
						},
						{
							"key": "Etag",
							"value": "W/\"b75a73f7fecbe04a3de9d907abf0b5de\""
						},
						{
							"key": "Cache-Control",
							"value": "max-age=0, private, must-revalidate"
						},
						{
							"key": "X-Request-Id",
							"value": "1c7c77eb-be3a-4ba3-83f1-9c8b7069224e"
						},
						{
							"key": "X-Runtime",
							"value": "0.014710"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Via",
							"value": "1.1 vegur"
						}
					],
					"cookie": [],
					"body": "{\n    \"data\": {\n        \"interventions\": [\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-12T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-04-10T00:00:00Z\",\n                \"batteryID\": 2,\n                \"buildingID\": 29,\n                \"columnID\": 4,\n                \"elevatorID\": 67,\n                \"employeeID\": 1,\n                \"report\": \"Civis nostrum ultio. In aliqua corrumpo. Tendo trado balbus. Coniecto supellex verumtamen.\",\n                \"result\": \"Success\",\n                \"status\": \" Interrupted \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-06-04T00:00:00Z\",\n                \"batteryID\": 36,\n                \"buildingID\": 24,\n                \"columnID\": 41,\n                \"elevatorID\": 12,\n                \"employeeID\": 24,\n                \"report\": \"Attollo tot supplanto. Cunae sublime angulus.\",\n                \"result\": \" Failure \",\n                \"status\": \" InProgress \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-01T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-11-02T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 6,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 12,\n                \"report\": \"Aut cubicularis autus. Tubineus velociter attero. Urbs quaerat vomer. Alii vae abduco.\",\n                \"result\": \" Failure \",\n                \"status\": \" Resumed \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-24T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-12-11T00:00:00Z\",\n                \"batteryID\": 3,\n                \"buildingID\": 1,\n                \"columnID\": 27,\n                \"elevatorID\": 36,\n                \"employeeID\": 17,\n                \"report\": \"Trucido quaerat curis. Succedo aro velum. Perferendis vulgaris eaque.\",\n                \"result\": \"Success\",\n                \"status\": \" InProgress \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-26T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-11-27T00:00:00Z\",\n                \"batteryID\": 31,\n                \"buildingID\": 7,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 21,\n                \"report\": \"Una quia amissio. Cernuus sint necessitatibus.\",\n                \"result\": \" Failure \",\n                \"status\": \"Pending \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-10-09T00:00:00Z\",\n                \"batteryID\": 1,\n                \"buildingID\": 22,\n                \"columnID\": 22,\n                \"elevatorID\": null,\n                \"employeeID\": 16,\n                \"report\": \"Aggero vacuus versus. Molestias testimonium cogito.\",\n                \"result\": \"Success\",\n                \"status\": \" Resumed \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-10T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-03-22T00:00:00Z\",\n                \"batteryID\": 35,\n                \"buildingID\": 8,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 2,\n                \"report\": \"Auditor tribuo quia. Ocer amor ut. Coruscus apostolus agnosco.\",\n                \"result\": \"Incomplete\",\n                \"status\": \" Interrupted \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-09-28T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-01-08T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 4,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 14,\n                \"report\": \"Neque cornu aedificium. Uter volutabrum vilitas.\",\n                \"result\": \" Failure \",\n                \"status\": \" Complete\"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-07T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-10-14T00:00:00Z\",\n                \"batteryID\": 8,\n                \"buildingID\": 10,\n                \"columnID\": 20,\n                \"elevatorID\": null,\n                \"employeeID\": 12,\n                \"report\": \"Trans abundans officiis. Qui usitas infit. Appositus totam constans. Incidunt dolore sapiente. Vacuus voluptatem corpus.\",\n                \"result\": \"Success\",\n                \"status\": \"Pending \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-11-06T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-06-16T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 26,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 20,\n                \"report\": \"Cito sollers aduro. Thorax degusto sapiente. Aperte copia inventore.\",\n                \"result\": \" Failure \",\n                \"status\": \" Complete\"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-27T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-04-24T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 13,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 12,\n                \"report\": \"Stillicidium nam strues. Crapula centum est. Cibo cito theca. Vilis una deleniti.\",\n                \"result\": \"Incomplete\",\n                \"status\": \" Interrupted \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-26T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-06-28T00:00:00Z\",\n                \"batteryID\": 10,\n                \"buildingID\": 11,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 25,\n                \"report\": \"Laboriosam acidus tergiversatio. Copia vesco absum. Caute cultura quidem. Combibo terminatio non.\",\n                \"result\": \"Incomplete\",\n                \"status\": \" Interrupted \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-09T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-07-30T00:00:00Z\",\n                \"batteryID\": 21,\n                \"buildingID\": 27,\n                \"columnID\": 25,\n                \"elevatorID\": null,\n                \"employeeID\": 3,\n                \"report\": \"Talis corona peior. Degero distinctio suadeo.\",\n                \"result\": \"Incomplete\",\n                \"status\": \" InProgress \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-15T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-06-05T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 18,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 15,\n                \"report\": \"Amiculum dedico calamitas. Cultura tantillus accusator. Angustus tyrannus amoveo.\",\n                \"result\": \"Incomplete\",\n                \"status\": \" InProgress \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-30T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-04-03T00:00:00Z\",\n                \"batteryID\": 35,\n                \"buildingID\": 8,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 15,\n                \"report\": \"Autem vis soluta. Curvus uterque cognatus. Vicinus iste crinis. Accedo adipisci tamisium. Ullus adiuvo degusto.\",\n                \"result\": \"Incomplete\",\n                \"status\": \"Pending \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-07-09T00:00:00Z\",\n                \"batteryID\": 35,\n                \"buildingID\": 8,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 11,\n                \"report\": \"Amita cribro reprehenderit. Acervus comes conicio. Valetudo certo sollicito.\",\n                \"result\": \"Incomplete\",\n                \"status\": \"Pending \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-29T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-12-30T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 21,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 10,\n                \"report\": \"Suppono accipio cuppedia. Aegrotatio arguo vulariter. Apostolus abscido et. Dolore confero utrum. Utrum terga acquiro.\",\n                \"result\": \"Success\",\n                \"status\": \" Resumed \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-18T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-11-11T00:00:00Z\",\n                \"batteryID\": 14,\n                \"buildingID\": 28,\n                \"columnID\": 14,\n                \"elevatorID\": null,\n                \"employeeID\": 9,\n                \"report\": \"Vallum temporibus volup. Canto beneficium patrocinor.\",\n                \"result\": \" Failure \",\n                \"status\": \" InProgress \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-21T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2018-09-24T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 21,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 16,\n                \"report\": \"Dolorem deputo decretum. Aut soleo contego. Thermae accommodo perferendis. Vindico tergiversatio voluptatem.\",\n                \"result\": \" Failure \",\n                \"status\": \" InProgress \"\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-15T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-08-22T00:00:00Z\",\n                \"batteryID\": null,\n                \"buildingID\": 6,\n                \"columnID\": null,\n                \"elevatorID\": null,\n                \"employeeID\": 23,\n                \"report\": \"Synagoga territo canonicus. Creta somnus qui.\",\n                \"result\": \" Failure \",\n                \"status\": \" Interrupted \"\n            }\n        ],\n        \"customer\": {\n            \"companyContactPhone\": \"308-511-5457\",\n            \"companyDescription\": \"Profound mobile matrices\",\n            \"companyName\": \"Ruecker, Daniel and Lehner\",\n            \"emailOfTheCompanyContact\": \"seth.ortiz@nienow.biz\",\n            \"fullNameOfServiveTechnicalAuthority\": \"Eliseo Stracke\",\n            \"fullNameOfTheCompanyContact\": \"Miss Letha Kuvalis\",\n            \"technicalManagerEmailForService\": null,\n            \"technicalManagerEmailForServive\": \"evelin_ratke@morar-bergstrom.co\"\n        }\n    }\n}"
				}
			]
		},
		{
			"name": "https://supremerocketelevators.herokuapp.com/graphql",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "query{\r\n    \r\n   interventions{\r\n     endDateAndTimeOfTheIntervention\r\n     startDateAndTimeOfTheIntervention\r\n     report\r\n     result\r\n     employeeID\r\n     buildingID\r\n   }\r\n}\r\n\r\n\r\n",
						"variables": ""
					}
				},
				"url": {
					"raw": "https://supremerocketelevators.herokuapp.com/graphql",
					"protocol": "https",
					"host": [
						"supremerocketelevators",
						"herokuapp",
						"com"
					],
					"path": [
						"graphql"
					]
				}
			},
			"response": [
				{
					"name": "https://supremerocketelevators.herokuapp.com/graphql",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "graphql",
							"graphql": {
								"query": "query{\r\n    \r\n   interventions{\r\n     endDateAndTimeOfTheIntervention\r\n     startDateAndTimeOfTheIntervention\r\n     report\r\n     result\r\n     employeeID\r\n     buildingID\r\n   }\r\n}\r\n\r\n\r\n",
								"variables": ""
							}
						},
						"url": {
							"raw": "https://supremerocketelevators.herokuapp.com/graphql",
							"protocol": "https",
							"host": [
								"supremerocketelevators",
								"herokuapp",
								"com"
							],
							"path": [
								"graphql"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Server",
							"value": "Cowboy"
						},
						{
							"key": "Date",
							"value": "Sat, 02 Apr 2022 03:34:45 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "X-Frame-Options",
							"value": "SAMEORIGIN"
						},
						{
							"key": "X-Xss-Protection",
							"value": "0"
						},
						{
							"key": "X-Content-Type-Options",
							"value": "nosniff"
						},
						{
							"key": "X-Download-Options",
							"value": "noopen"
						},
						{
							"key": "X-Permitted-Cross-Domain-Policies",
							"value": "none"
						},
						{
							"key": "Referrer-Policy",
							"value": "strict-origin-when-cross-origin"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Vary",
							"value": "Accept"
						},
						{
							"key": "Etag",
							"value": "W/\"c33eac2a845550e90f01daeb3646a844\""
						},
						{
							"key": "Cache-Control",
							"value": "max-age=0, private, must-revalidate"
						},
						{
							"key": "X-Request-Id",
							"value": "c7887bc8-134f-4749-8377-beb79f4b6c20"
						},
						{
							"key": "X-Runtime",
							"value": "0.010020"
						},
						{
							"key": "Transfer-Encoding",
							"value": "chunked"
						},
						{
							"key": "Via",
							"value": "1.1 vegur"
						}
					],
					"cookie": [],
					"body": "{\n    \"data\": {\n        \"interventions\": [\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-12T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-04-10T00:00:00Z\",\n                \"report\": \"Civis nostrum ultio. In aliqua corrumpo. Tendo trado balbus. Coniecto supellex verumtamen.\",\n                \"result\": \"Success\",\n                \"employeeID\": 1,\n                \"buildingID\": 29\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-06-04T00:00:00Z\",\n                \"report\": \"Attollo tot supplanto. Cunae sublime angulus.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 24,\n                \"buildingID\": 24\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-01T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-11-02T00:00:00Z\",\n                \"report\": \"Aut cubicularis autus. Tubineus velociter attero. Urbs quaerat vomer. Alii vae abduco.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 12,\n                \"buildingID\": 6\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-24T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-12-11T00:00:00Z\",\n                \"report\": \"Trucido quaerat curis. Succedo aro velum. Perferendis vulgaris eaque.\",\n                \"result\": \"Success\",\n                \"employeeID\": 17,\n                \"buildingID\": 1\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-26T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-11-27T00:00:00Z\",\n                \"report\": \"Una quia amissio. Cernuus sint necessitatibus.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 21,\n                \"buildingID\": 7\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-10-09T00:00:00Z\",\n                \"report\": \"Aggero vacuus versus. Molestias testimonium cogito.\",\n                \"result\": \"Success\",\n                \"employeeID\": 16,\n                \"buildingID\": 22\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-10T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-03-22T00:00:00Z\",\n                \"report\": \"Auditor tribuo quia. Ocer amor ut. Coruscus apostolus agnosco.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 2,\n                \"buildingID\": 8\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-09-28T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-01-08T00:00:00Z\",\n                \"report\": \"Neque cornu aedificium. Uter volutabrum vilitas.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 14,\n                \"buildingID\": 4\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-07T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-10-14T00:00:00Z\",\n                \"report\": \"Trans abundans officiis. Qui usitas infit. Appositus totam constans. Incidunt dolore sapiente. Vacuus voluptatem corpus.\",\n                \"result\": \"Success\",\n                \"employeeID\": 12,\n                \"buildingID\": 10\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-11-06T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-06-16T00:00:00Z\",\n                \"report\": \"Cito sollers aduro. Thorax degusto sapiente. Aperte copia inventore.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 20,\n                \"buildingID\": 26\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-27T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-04-24T00:00:00Z\",\n                \"report\": \"Stillicidium nam strues. Crapula centum est. Cibo cito theca. Vilis una deleniti.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 12,\n                \"buildingID\": 13\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-26T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-06-28T00:00:00Z\",\n                \"report\": \"Laboriosam acidus tergiversatio. Copia vesco absum. Caute cultura quidem. Combibo terminatio non.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 25,\n                \"buildingID\": 11\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-10-09T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-07-30T00:00:00Z\",\n                \"report\": \"Talis corona peior. Degero distinctio suadeo.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 3,\n                \"buildingID\": 27\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-15T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-06-05T00:00:00Z\",\n                \"report\": \"Amiculum dedico calamitas. Cultura tantillus accusator. Angustus tyrannus amoveo.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 15,\n                \"buildingID\": 18\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-30T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-04-03T00:00:00Z\",\n                \"report\": \"Autem vis soluta. Curvus uterque cognatus. Vicinus iste crinis. Accedo adipisci tamisium. Ullus adiuvo degusto.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 15,\n                \"buildingID\": 8\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2021-12-23T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2021-07-09T00:00:00Z\",\n                \"report\": \"Amita cribro reprehenderit. Acervus comes conicio. Valetudo certo sollicito.\",\n                \"result\": \"Incomplete\",\n                \"employeeID\": 11,\n                \"buildingID\": 8\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-29T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-12-30T00:00:00Z\",\n                \"report\": \"Suppono accipio cuppedia. Aegrotatio arguo vulariter. Apostolus abscido et. Dolore confero utrum. Utrum terga acquiro.\",\n                \"result\": \"Success\",\n                \"employeeID\": 10,\n                \"buildingID\": 21\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-01-18T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2019-11-11T00:00:00Z\",\n                \"report\": \"Vallum temporibus volup. Canto beneficium patrocinor.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 9,\n                \"buildingID\": 28\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-21T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2018-09-24T00:00:00Z\",\n                \"report\": \"Dolorem deputo decretum. Aut soleo contego. Thermae accommodo perferendis. Vindico tergiversatio voluptatem.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 16,\n                \"buildingID\": 21\n            },\n            {\n                \"endDateAndTimeOfTheIntervention\": \"2022-03-15T00:00:00Z\",\n                \"startDateAndTimeOfTheIntervention\": \"2020-08-22T00:00:00Z\",\n                \"report\": \"Synagoga territo canonicus. Creta somnus qui.\",\n                \"result\": \" Failure \",\n                \"employeeID\": 23,\n                \"buildingID\": 6\n            }\n        ]\n    }\n}"
				}
			]
		}
	]
}

* DEPLOYEMENT 
to deploy this api uses heroku
set up an heroku account
add you local repository to your heroku server
set ut the databases in the heroku server
push your projet to heroku master to deply it



* ...
