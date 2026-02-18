import axios from 'axios';
import config from "../config";
const { post } = require("./ApiService")

export const SaveBooking = async (booking: any) => {
    return await post(config.baseUrl, config.endPoint.saveBooking, booking);
}

export const FetchBookingByUserID = async (userId?: number) => {
    const userDetails = {
        userId: userId
    }
    return await post(config.baseUrl, config.endPoint.fetchBookings, userDetails);
}

export const GetEvents = async () => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://Real-Time-Events-Search.proxy-production.allthingsdev.co/v1/search-events?query=any%20in%20Sany&date=any&is_virtual=false&start=0',
        headers: { 
            'x-apihub-key': '5eBze5-ce9qPXfy-RlkEB3hu4My1TOrmFYbjNBprQ8R1nwp6Iz', 
            'x-apihub-host': 'Real-Time-Events-Search.allthingsdev.co', 
            'x-apihub-endpoint': '0ac072ed-7872-4f4c-9304-7a8252d633b3'
        }
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
        return response?.data;
    } catch (error: any) {
        console.log(error);
    }
}

const handleResponse = (eventRes: any) => {
    console.log(eventRes?.data);
    let finalResult: any = [];
    let index = 0;
    eventRes?.data.forEach((event: any)=>{
        index = index + 1;
        const modifyEvent = {
            id: index ,
            name: event?.name,
            startTime: event?.start_time,
            endTime: event?.end_time,
            publisher: event?.publisher,
            venue: event?.venue?.full_address,
            rating: event?.venue?.rating
        }

        finalResult.push(modifyEvent);
    });

    console.log(finalResult);
    return finalResult;

}

export const testData = [
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTExfDY1NzYxNzI3MDE1NjQ2MTEyNDk=",
        "event_mid": "/g/11lf8vp236",
        "name": "El faro de Sandy Hook; Why is Sandy Hook Lighthouse so Special?",
        "link": "https://allevents.in/highlands/el-faro-de-sandy-hook;-why-is-sandy-hook-lighthouse-so-special/200026868649740",
        "description": "\u0002The Sandy Hook peninsula is rich in maritime and military history. The Sandy Hook Lighthouse, the oldest operating lighthouse in the United States, is the most significant historic structure on the peninsula. Come learn about everything that makes Sandy Hook special. Join a park ranger on a climb to",
        "start_time": "2024-08-11 18:00:00",
        "start_time_utc": "2024-08-11 22:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-11 19:00:00",
        "end_time_utc": "2024-08-11 23:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://cdn-az.allevents.in/events2/banners/5a314b6e16de822017e1c13f6343cb3584d6a9a3b2ab779afc74299dc0a27c5a-rimg-w420-h236-dc75acf8-gmir?v=1722490777",
        "publisher": "Allevents.in",
        "publisher_favicon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://allevents.in&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Allevents.in",
        "info_links": [
            {
                "source": "AllEvents.in",
                "link": "https://allevents.in/highlands/el-faro-de-sandy-hook;-why-is-sandy-hook-lighthouse-so-special/200026868649740"
            }
        ],
        "venue": {
            "google_id": "0x89c3e5c20d285e8b:0x206fcb6301026292",
            "name": "Sandy Hook Lighthouse",
            "website": "https://www.nps.gov/gate/learn/historyculture/sandy-hook-lighthouse.htm",
            "review_count": 753,
            "rating": 4.8,
            "subtype": "tourist_attraction",
            "subtypes": [
                "tourist_attraction",
                "attraction",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "hiking_area",
                "outdoor_activities",
                "park",
                "places_of_interest",
                "public_api_establishment",
                "recreation",
                "sports",
                "sports_activity_location",
                "tourism",
                "travel",
                "vacances"
            ],
            "full_address": "84 Mercer Road, Highlands, NJ 07732, United States",
            "latitude": 40.461636,
            "longitude": -74.00214,
            "street_number": "84",
            "street": "Mercer Road",
            "city": "Highlands",
            "state": "New Jersey",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/m/039wxh"
        },
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTE3fDU0ODI4NDY5OTUyMDM4OTAxMQ==",
        "event_mid": "/g/11lf8x_lx_",
        "name": "Defend Us at Sandy Jack's",
        "link": "https://tockify.com/thotyssey/agenda?tags=evonka&search=turn%20it%20on",
        "description": "\u0001A benefit for PFLAG at Sandy Jacks featuring Vampy Von Thickums Galore, Sorayah D, Bertha Vanayshun, Frida Cox, Olympia, LanyC) ArmC6n, Miss Afrosephone, Keke, Afrodite, Nikael, Boxa Crayonz, Anne J. Ti",
        "start_time": "2024-08-17 21:00:00",
        "start_time_utc": "2024-08-18 01:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-17 23:30:00",
        "end_time_utc": "2024-08-18 03:30:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "publisher": "Tockify.com",
        "publisher_favicon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://tockify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Tockify.com",
        "info_links": [
            {
                "source": "Thotyssey NYC Events",
                "link": "https://tockify.com/thotyssey/agenda?tags=evonka&search=turn%20it%20on"
            }
        ],
        "venue": {
            "google_id": "0x89c25b825be4af39:0xd435653c75ab5703",
            "name": "Sandy Jack's",
            "phone_number": "+13478896078",
            "website": "http://sandyjacks.com/",
            "review_count": 114,
            "rating": 4.8,
            "subtype": "bar",
            "subtypes": [
                "bar",
                "bars_and_pubs",
                "beverages",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "food_and_drink",
                "nightlife",
                "public_api_establishment"
            ],
            "full_address": "683 5th Avenue, Brooklyn, NY 11215, United States",
            "latitude": 40.661545,
            "longitude": -73.99302,
            "street_number": "683",
            "street": "5th Avenue",
            "state": "New York",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/11pwtg6pth"
        },
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTExfDUxMTE1NzIzMDk5ODY1MjA1MQ==",
        "event_mid": "/g/11vyfpkjcz",
        "name": "Sandy Stones Music",
        "link": "https://www.northjersey.com/things-to-do/events/?_evDiscoveryPath=/event/105228018n-sandy-stones-music",
        "description": "\u0002The trio is back at everyoneb\u0000\u0019s favorite music spot, The Hilltop Tavern in Lodi. Beat the Sunday Scaries with some acoustic tunes and good times! Sandy Stones started her musical journey as a Singer-Songwriter, playing the bars on Bleecker Street in NYC with nothing more than her voice and an acousti",
        "start_time": "2024-08-11 16:00:00",
        "start_time_utc": "2024-08-11 20:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-11 22:00:00",
        "end_time_utc": "2024-08-12 02:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://photos.bandsintown.com/thumb/16169017.jpeg",
        "publisher": "Northjersey.com",
        "publisher_favicon": "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://northjersey.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Northjersey.com",
        "ticket_links": [
            {
                "source": "Bandsintown",
                "link": "https://www.bandsintown.com/v/10199664-hilltop-tavern"
            }
        ],
        "info_links": [
            {
                "source": "northjersey",
                "link": "https://www.northjersey.com/things-to-do/events/?_evDiscoveryPath=/event/105228018n-sandy-stones-music"
            },
            {
                "source": "ipes Guam - Stars and Stripes",
                "link": "https://guam.stripes.com/events/?_evDiscoveryPath=/event/105228018n-sandy-stones-music"
            },
            {
                "source": "Health & Life Magazine",
                "link": "https://www.healthandlifemags.com/bergen/bergen-events/?_evDiscoveryPath=/event/105228018n-sandy-stones-music"
            },
            {
                "source": "OTL City Guides",
                "link": "https://otlcityguides.com/best-things-to-do-in-the-uk/?_evDiscoveryPath=/event/105228018n-sandy-stones-music"
            },
            {
                "source": "by Online Business Expo",
                "link": "https://www.onlinebusinessexpo.ca/events.html?_evDiscoveryPath=/event/105228018n-sandy-stones-music"
            }
        ],
        "venue": {
            "google_id": "0x89c2fa2921e17fe9:0x135c14b819409e81",
            "name": "Hilltop Tavern",
            "phone_number": "+12017121632",
            "review_count": 236,
            "rating": 4.6,
            "subtype": "bar",
            "subtypes": [
                "bar",
                "bars_and_pubs",
                "beverages",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "food_and_drink",
                "nightlife",
                "pub",
                "public_api_establishment"
            ],
            "full_address": "50 Essex Street, Lodi, NJ 07644, United States",
            "latitude": 40.894062,
            "longitude": -74.076744,
            "street_number": "50",
            "street": "Essex Street",
            "city": "Lodi",
            "state": "New Jersey",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/1td18sdd"
        },
        "tags": [
            "concert",
            "music",
            "show"
        ],
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTE4fDU2ODY3OTc3OTI2MTYxOTM3Mjk=",
        "event_mid": "/g/11vr7g543z",
        "name": "Sandy Stones Music",
        "link": "https://www.mycentraljersey.com/things-to-do/events/?_evDiscoveryPath=/event/105228182n-sandy-stones-music",
        "description": "\u0002The Sandy Stones XLT is headed \"down the shore\" for our 2nd Sunday at Spicy Cantina! Sandy Stones started her musical journey as a Singer-Songwriter, playing the bars on Bleecker Street in NYC with nothing more than her voice and an acoustic guitar. In 2011, she met Bassist/Guitarist/Singer, Paul De",
        "start_time": "2024-08-18 14:00:00",
        "start_time_utc": "2024-08-18 18:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-18 20:00:00",
        "end_time_utc": "2024-08-19 00:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://photos.bandsintown.com/thumb/16169017.jpeg",
        "publisher": "Mycentraljersey.com",
        "publisher_favicon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://mycentraljersey.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Mycentraljersey.com",
        "ticket_links": [
            {
                "source": "Bandsintown",
                "link": "https://www.bandsintown.com/e/105228182-sandy-stones-music-at-spicy-cantina"
            }
        ],
        "info_links": [
            {
                "source": "MyCentralJersey.com",
                "link": "https://www.mycentraljersey.com/things-to-do/events/?_evDiscoveryPath=/event/105228182n-sandy-stones-music"
            },
            {
                "source": "Trinidad Express",
                "link": "https://trinidadexpress.com/local-events/?_evDiscoveryPath=/event/105228182n-sandy-stones-music"
            },
            {
                "source": "Facebook",
                "link": "https://www.facebook.com/events/spicy-cantina/the-sandy-stones-xl-trio-spicy-cantina-in-seaside-heights/648906553978664/"
            },
            {
                "source": "AllEvents.in",
                "link": "https://allevents.in/seaside%20heights/the-sandy-stones-xl-trio-spicy-cantina-in-seaside-heights/200026549534402"
            },
            {
                "source": "OTL City Guides",
                "link": "https://otlcityguides.com/best-things-to-do-in-the-uk/?_evDiscoveryPath=/event/105228182n-sandy-stones-music"
            }
        ],
        "venue": {
            "google_id": "0x89c19a2e099e6561:0x3079f57708e6f20a",
            "name": "Spicy Cantina",
            "phone_number": "+17327934777",
            "website": "http://www.spicycantina.com/",
            "review_count": 2067,
            "rating": 4,
            "subtype": "mexican_restaurant",
            "subtypes": [
                "mexican_restaurant",
                "bar",
                "bars_and_pubs",
                "beverages",
                "eatery",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "food",
                "food_and_drink",
                "nightlife",
                "public_api_establishment",
                "restaurant",
                "restaurant_or_cafe",
                "western_food"
            ],
            "full_address": "500 Boardwalk, Seaside Heights, NJ 08751, United States",
            "latitude": 39.94086,
            "longitude": -74.071106,
            "street_number": "500",
            "street": "Boardwalk",
            "city": "Seaside Heights",
            "state": "New Jersey",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/1tdq20r4"
        },
        "tags": [
            "concert",
            "music",
            "show"
        ],
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTEzfDk0NTAzMDc3NDAyOTg5NzI5Nw==",
        "event_mid": "/g/11w424jhr_",
        "name": "Sandy Eldred: Jazz Night at the Ukrainian League",
        "link": "https://www.delawarebusinessnow.com/local-events/?_evDiscoveryPath=/event/105570076n-sandy-eldred-jazz-night-at-the-ukrainian-league",
        "description": "\u0002U.S.E. Trio Sandy Eldred is an internationally acclaimed bassist, composer, producer, and music educator residing in Philadelphia, PA. He is known for his inventiveness and command across music genres. Eldred is founder of record label, Each and Only, and is a recording artist for Ukrainian record l",
        "start_time": "2024-08-13 19:30:00",
        "start_time_utc": "2024-08-13 23:30:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-13 23:30:00",
        "end_time_utc": "2024-08-14 03:30:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://photos.bandsintown.com/thumb/15391537.jpeg",
        "publisher": "Delawarebusinessnow.com",
        "publisher_favicon": "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://delawarebusinessnow.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Delawarebusinessnow.com",
        "info_links": [
            {
                "source": "Delaware Business Now",
                "link": "https://www.delawarebusinessnow.com/local-events/?_evDiscoveryPath=/event/105570076n-sandy-eldred-jazz-night-at-the-ukrainian-league"
            },
            {
                "source": "The New Times",
                "link": "https://www.newtimes.co.rw/events?_evDiscoveryPath=/event/105570076n-sandy-eldred-jazz-night-at-the-ukrainian-league"
            },
            {
                "source": "LancasterOnline",
                "link": "https://lancasteronline.com/calendar/?_evDiscoveryPath=/event/105570076n-sandy-eldred-jazz-night-at-the-ukrainian-league"
            },
            {
                "source": "Trinidad Express",
                "link": "https://trinidadexpress.com/local-events/?_evDiscoveryPath=/event/105570076n-sandy-eldred-jazz-night-at-the-ukrainian-league"
            },
            {
                "source": "LevittownNow.com",
                "link": "https://levittownnow.com/community-calendar/?_evDiscoveryPath=/event/105570076n-sandy-eldred-jazz-night-at-the-ukrainian-league"
            }
        ],
        "venue": {
            "google_id": "0x89c6c7c88830740f:0xda70c3641cbfad44",
            "name": "Ukrainian League of Phila Inc",
            "phone_number": "+12156842180",
            "website": "https://ukrainianleague.com/",
            "review_count": 31,
            "rating": 4.4,
            "subtype": "social_club",
            "subtypes": [
                "social_club",
                "association_or_organization",
                "club",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "potentially_sensitive_entity",
                "public_api_establishment"
            ],
            "full_address": "800 North 23rd Street, Philadelphia, PA 19130, United States",
            "latitude": 39.969917,
            "longitude": -75.17501,
            "street_number": "800",
            "street": "North 23rd Street",
            "city": "Philadelphia",
            "state": "Pennsylvania",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/1tfczsb9"
        },
        "tags": [
            "music",
            "show"
        ],
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTE4fDE1MTQ2NDc0NTAyMjI5NjU2MTc3",
        "event_mid": "/g/11w7cvb247",
        "name": "Sandy Gee Memorial Benefit & Car Show",
        "link": "https://allevents.in/millville/sandy-gee-memorial-benefit-and-car-show/200026862891644",
        "description": "\u0002p\u001f\u001a\u0017p\u001f\u000e\u0000 Join us for the Sandy Gee Memorial Benefit & Car Show! p\u001f\u000e\u0000p\u001f\u001a\u0017\n\n#1 Dealer in the Country Raising Money In The Fight Against Breast Cancer\n\np\u001f\u0013\u0005 Date: August 18th\np\u001f\u0015\u0019 Time: 10 AM - 2 PM\np\u001f\u0013\r Location: 8000 Dividing Creek Rd, Millville, NJ, 08332\n\nGet your tickets now by scanning the QR code!\nor visit http",
        "start_time": "2024-08-18 10:00:00",
        "start_time_utc": "2024-08-18 14:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-18 13:00:00",
        "end_time_utc": "2024-08-18 17:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://cdn-az.allevents.in/events1/banners/d3d184efeaba228d0db770c2ec9eaa05a2928c45566fe0aa55a37525916cf76c-rimg-w1200-h628-dcffffff-gmir?v=1722401681",
        "publisher": "Allevents.in",
        "publisher_favicon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://allevents.in&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Allevents.in",
        "info_links": [
            {
                "source": "AllEvents.in",
                "link": "https://allevents.in/millville/sandy-gee-memorial-benefit-and-car-show/200026862891644"
            }
        ],
        "venue": {
            "google_id": "0x89c735dda854f409:0xe7117b061a3c6000",
            "name": "New Jersey Motorsports Park",
            "phone_number": "+18563278000",
            "website": "https://njmp.com/",
            "review_count": 584,
            "rating": 4.5,
            "subtype": "car_race_track",
            "subtypes": [
                "car_race_track",
                "automotive",
                "camp",
                "car_dealer",
                "construction",
                "contractor",
                "drive",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "event_venue",
                "feature",
                "gas_and_automotive",
                "motor_vehicle_dealer",
                "outdoor_activities",
                "places_of_interest",
                "professional_services",
                "public_api_establishment",
                "race_car_dealer",
                "race_course",
                "recreation",
                "services",
                "shopping",
                "sports",
                "sports_activity_location",
                "store",
                "tourism",
                "vacances",
                "vehicle_dealers"
            ],
            "full_address": "8000 Dividing Creek Road, Millville, NJ 08332, United States",
            "latitude": 39.358997,
            "longitude": -75.06161,
            "street_number": "8000",
            "street": "Dividing Creek Road",
            "city": "Millville",
            "state": "New Jersey",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/m/02z5xb0"
        },
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTEzfDM1NjQ1NTY5NzQzNTUwOTIyMTY=",
        "event_mid": "/g/11w3nlwwm5",
        "name": "Karaoke at Sandy Jacks",
        "link": "https://tockify.com/thotyssey/detail/29300/1723597200000",
        "description": "Karaoke at Sandy Jack's, with DJ Joe Rude.",
        "start_time": "2024-08-13 21:00:00",
        "start_time_utc": "2024-08-14 01:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-14 01:00:00",
        "end_time_utc": "2024-08-14 05:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://d3fd4e4oyqldw5.cloudfront.net/56b4c4fddf82fe40ce873cdc/651328f341fad31755d93bf0/scaled_384.jpg",
        "publisher": "Tockify.com",
        "publisher_favicon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://tockify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Tockify.com",
        "info_links": [
            {
                "source": "Tockify",
                "link": "https://tockify.com/thotyssey/detail/29300/1723597200000"
            }
        ],
        "venue": {
            "google_id": "0x89c25b825be4af39:0xd435653c75ab5703",
            "name": "Sandy Jack's",
            "phone_number": "+13478896078",
            "website": "http://sandyjacks.com/",
            "review_count": 114,
            "rating": 4.8,
            "subtype": "bar",
            "subtypes": [
                "bar",
                "bars_and_pubs",
                "beverages",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "food_and_drink",
                "nightlife",
                "public_api_establishment"
            ],
            "full_address": "683 5th Avenue, Brooklyn, NY 11215, United States",
            "latitude": 40.661545,
            "longitude": -73.99302,
            "street_number": "683",
            "street": "5th Avenue",
            "state": "New York",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/11pwtg6pth"
        },
        "tags": [
            "music",
            "show"
        ],
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTExfDE2MjY4ODc4ODc0ODg4MTgyNDU3",
        "event_mid": "/g/11lf8yy45m",
        "name": "Versus Monster Trucks - Sandy Creek, NY",
        "link": "https://allevents.in/mobile/amp-event.php?event_id=80003480788924",
        "description": "\u0002Versus Monster Trucks is heading to the Oswego County Fair in Sandy Creek NY for the FIRST TIME EVER! 5 Monster Trucks are scheduled to make appearances on Saturday August 10th and Sunday August 11th!TICKETS:www.oswegomonstertrucks.com5 Monster Trucks including:The 8-time Monster Jam World Finalist",
        "start_time": "2024-08-11 15:00:00",
        "start_time_utc": "2024-08-11 19:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-11 17:00:00",
        "end_time_utc": "2024-08-11 21:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://cdn2.allevents.in/thumbs/thumb66ac1b12b6634.jpg",
        "publisher": "Allevents.in",
        "publisher_favicon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://allevents.in&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Allevents.in",
        "ticket_links": [
            {
                "source": "AllEvents.in",
                "link": "https://allevents.in/sandy%20creek/versus-monster-trucks-sandy-creek-ny/80003480788924"
            },
            {
                "source": "perto.com",
                "link": "https://en.perto.com/us/sandy-creek-284455/oswego-county-fairgrounds-893530/versus-monster-trucks-sandy-creek-ny-14446889/"
            }
        ],
        "venue": {
            "google_id": "0x89d836266abd903b:0xf5b3b29984a69b5b",
            "name": "Oswego County Fairgrounds",
            "phone_number": "+13154394211",
            "website": "http://www.oswegocountyfair.com/",
            "review_count": 160,
            "rating": 4,
            "subtype": "fairground",
            "subtypes": [
                "fairground",
                "establishment",
                "establishment_poi",
                "event_venue",
                "feature",
                "public_api_establishment"
            ],
            "full_address": "291 Ellisburg Street, Sandy Creek, NY 13145, United States",
            "latitude": 43.64893,
            "longitude": -76.08921,
            "street_number": "291",
            "street": "Ellisburg Street",
            "city": "Sandy Creek",
            "state": "New York",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/11cn3232ly"
        },
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTE1fDE4NzAyMDY1MDkyNTg4OTM0NTg=",
        "event_mid": "/g/11vxpsq9nt",
        "name": "Knitting With Sandy",
        "link": "https://northchathamlibrary.org/event/knitting-with-sandy/2024-08-15/",
        "description": "\u0001Come join the long-standing knitting group at the library. Crochet, knitting, weaving, embroideryb\u0000\u0014all fiber arts welcome! Work on your project and enjoy friendly conversation with your neighbors. No reservation needed.",
        "start_time": "2024-08-15 10:00:00",
        "start_time_utc": "2024-08-15 14:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-15 12:00:00",
        "end_time_utc": "2024-08-15 16:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "publisher": "Northchathamlibrary.org",
        "publisher_favicon": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://northchathamlibrary.org&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Northchathamlibrary.org",
        "info_links": [
            {
                "source": "The North Chatham Free Library",
                "link": "https://northchathamlibrary.org/event/knitting-with-sandy/2024-08-15/"
            }
        ],
        "venue": {
            "google_id": "0x89ddfabcc9de7673:0x735ee4942a997706",
            "name": "North Chatham Free Library",
            "phone_number": "+15187663211",
            "website": "http://northchathamlibrary.org/",
            "review_count": 8,
            "rating": 5,
            "subtype": "public_library",
            "subtypes": [
                "public_library",
                "books",
                "company",
                "cultural_institution",
                "culture",
                "education",
                "education_and_culture",
                "entertainment",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "government",
                "information_centers",
                "library",
                "media",
                "places_of_interest",
                "public_api_establishment",
                "public_services",
                "services"
            ],
            "full_address": "4287 New York 203, North Chatham, NY 12132, United States",
            "latitude": 42.474354,
            "longitude": -73.63281,
            "street_number": "4287",
            "city": "North Chatham",
            "state": "New York",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/1tfrnbf6"
        },
        "language": "en"
    },
    {
        "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTI4fF8xNTIyNDE1NTAwODY0MjA0MTIzMw==",
        "event_mid": "/g/11vr0nhg6c",
        "name": "Sandy Stones Music",
        "link": "https://www.healthandlifemags.com/bergen/bergen-events/?_evDiscoveryPath=/event/105228311n-sandy-stones-music",
        "description": "\u0002The Ridgefield Park Summer Concert Series welcomes The Sandy Stones XL Trio and TAXI! Bring your chairs and get ready for a night of awesome entertainment! Sandy Stones started her musical journey as a Singer-Songwriter, playing the bars on Bleecker Street in NYC with nothing more than her voice and",
        "start_time": "2024-08-28 18:00:00",
        "start_time_utc": "2024-08-28 22:00:00",
        "start_time_precision_sec": 1,
        "end_time": "2024-08-29 00:00:00",
        "end_time_utc": "2024-08-29 04:00:00",
        "end_time_precision_sec": 1,
        "is_virtual": false,
        "thumbnail": "https://photos.bandsintown.com/thumb/16169017.jpeg",
        "publisher": "Healthandlifemags.com",
        "publisher_favicon": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://healthandlifemags.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        "publisher_domain": "Healthandlifemags.com",
        "ticket_links": [
            {
                "source": "Bandsintown",
                "link": "https://www.bandsintown.com/e/1031146933-sandy-stones-music-at-mcgowan-park?came_from=209"
            }
        ],
        "info_links": [
            {
                "source": "Health & Life Magazine",
                "link": "https://www.healthandlifemags.com/bergen/bergen-events/?_evDiscoveryPath=/event/105228311n-sandy-stones-music"
            },
            {
                "source": "Facebook",
                "link": "https://www.facebook.com/events/mcgowan-park/the-sandy-stones-xl-trio-taxi-the-ridgefield-park-summer-concert-series/941053350734681/"
            },
            {
                "source": "TravelHost, LLC",
                "link": "https://www.travelhost.com/new-york/events/?_evDiscoveryPath=/event/105228311n-sandy-stones-music"
            },
            {
                "source": "AllEvents.in",
                "link": "https://allevents.in/ridgefield%20park/2024-08-28?ref=caln"
            },
            {
                "source": "communitynewstouse.com",
                "link": "https://www.communitynewstouse.com/local-events/?_evDiscoveryPath=/event/105228311n-sandy-stones-music"
            }
        ],
        "venue": {
            "google_id": "0x89c2f77ea7100001:0xe9e030a1696df127",
            "name": "McGowan Park",
            "phone_number": "+12016414950",
            "website": "https://www.ridgefieldpark.org/board-recreation/pages/mcgowan-park",
            "review_count": 46,
            "rating": 4.3,
            "subtype": "park",
            "subtypes": [
                "park",
                "attraction",
                "entertainment_and_recreation",
                "establishment",
                "establishment_poi",
                "feature",
                "places_of_interest",
                "public_api_establishment",
                "recreation",
                "tourism",
                "vacances"
            ],
            "full_address": "149 Bergen Turnpike, Ridgefield Park, NJ 07660, United States",
            "latitude": 40.844643,
            "longitude": -74.024826,
            "street_number": "149",
            "street": "Bergen Turnpike",
            "city": "Ridgefield Park",
            "state": "New Jersey",
            "country": "US",
            "timezone": "America/New_York",
            "google_mid": "/g/11d_tsf8p8"
        },
        "tags": [
            "concert",
            "music",
            "show"
        ],
        "language": "en"
    }
]