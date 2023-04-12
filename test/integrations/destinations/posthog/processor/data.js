const data = [{
            "name": "posthog",
            "description":  "PostHog alias call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com/"}},"message":{"event":"event-alias","context":{"ip":"0.0.0.0","device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.7"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"type":"alias","timestamp":"2020-11-04T13:21:09.712Z","userId":"uid-1","previousId":"prevId_1","anonymousId":"f3cf54d8-f237-45d2-89f7-ccd70d42cf31"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"properties":{"$set":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"$os":"android","$time":"2020-11-04T13:21:09.712Z","$device_id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","$ip":"0.0.0.0","$timestamp":"2020-11-04T13:21:09.712Z","$anon_distinct_id":"f3cf54d8-f237-45d2-89f7-ccd70d42cf31","distinct_id":"prevId_1","$device_manufacturer":"Xiaomi","$os_version":"8.1.0","$app_version":"1.1.7","$device_name":"xiaomi","$network_carrier":"Banglalink","$app_name":"RudderLabs JavaScript SDK","$device_model":"Redmi 6","$app_namespace":"com.rudderlabs.javascript","$app_build":"1.0.0","alias":"uid-1"},"timestamp":"2020-11-04T13:21:09.712Z","event":"$create_alias","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"alias"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog track call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE"}},"message":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","event":"Product Brought","context":{"ip":"0.0.0.0","device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","manufacturer":"Xiaomi","model":"Redmi 6","name":"xiaomi"},"network":{"carrier":"Banglalink"},"os":{"name":"android","version":"8.1.0"},"traits":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},"type":"track","properties":{"additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"timestamp":"2020-11-04T13:21:09.712Z","userId":"uid-2","messageId":"e4408cb8-16dd-41e9-a313-a7a9cdc4bac5"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"distinct_id":"uid-2","event":"Product Brought","messageId":"e4408cb8-16dd-41e9-a313-a7a9cdc4bac5","properties":{"$set":{"address":{"city":"Dhaka","country":"Bangladesh"},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"},"$os":"android","$time":"2020-11-04T13:21:09.712Z","$device_id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","$ip":"0.0.0.0","$timestamp":"2020-11-04T13:21:09.712Z","$anon_distinct_id":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","distinct_id":"uid-2","$device_manufacturer":"Xiaomi","$os_version":"8.1.0","$device_name":"xiaomi","$network_carrier":"Banglalink","$device_model":"Redmi 6","additional_bet_index":0,"battle_id":"N/A","bet_amount":9,"bet_level":1,"bet_multiplier":1,"coin_balance":9466052,"current_module_name":"CasinoGameModule","days_in_game":0,"extra_param":"N/A","fb_profile":"0","featureGameType":"N/A","game_fps":30,"game_id":"fireEagleBase","game_name":"FireEagleSlots","gem_balance":0,"graphicsQuality":"HD","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","internetReachability":"ReachableViaLocalAreaNetwork","isLowEndDevice":"False","is_auto_spin":"False","is_turbo":"False","isf":"False","ishighroller":"False","jackpot_win_amount":90,"jackpot_win_type":"Silver","level":6,"lifetime_gem_balance":0,"no_of_spin":1,"player_total_battles":0,"player_total_shields":0,"start_date":"2019-08-01","total_payments":0,"tournament_id":"T1561970819","versionSessionCount":2,"win_amount":0},"timestamp":"2020-11-04T13:21:09.712Z","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"capture"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog track call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com"}},"message":{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.7"},"traits":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r1@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.7"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","locale":"en-GB","os":{"name":"","version":""},"screen":{"density":2},"campaign":{},"page":{"path":"/Rectified.html","referrer":"http://localhost:1112/","search":"","title":"","url":"http://localhost:1112/Rectified.html"},"ip":"0.0.0.0","userID":"sampleUserOption"},"type":"track","messageId":"07cd68e5-9ad9-4a79-af51-f7118bc9ed71","originalTimestamp":"2020-11-04T13:21:09.712Z","anonymousId":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","userId":"uid-3","event":"order completed","properties":{"path":"path","referrer":"referrer","search":"search","KEY_3":{"CHILD_KEY_4":"value_3","CHILD_KEY_5":"value_4"},"title":"title","url":"url","total":1009,"products":[{"product_id":"507f1f77bcf86cd79943901ghh1","sku":"45790-38","name":"Monopoly: 7rd Edition","price":19,"position":"1","category":"Cars","quantity":4,"currency":"USD","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"},{"product_id":"507f1f77bcf86cd79943901gth1","sku":"45790-39","name":"Monopoly: 8th Edition","price":19,"quantity":2,"position":"1","currency":"USD","category":"Cars","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"}]},"integrations":{"All":true},"sentAt":"2020-11-04T13:21:09.712Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"distinct_id":"uid-3","event":"order completed","messageId":"07cd68e5-9ad9-4a79-af51-f7118bc9ed71","properties":{"$set":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r1@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"$current_url":"http://localhost:1112/Rectified.html","$pathname":"/Rectified.html","$lib":"RudderLabs JavaScript SDK","$lib_version":"1.1.7","$time":"2020-11-04T13:21:09.712Z","$ip":"0.0.0.0","$timestamp":"2020-11-04T13:21:09.712Z","$anon_distinct_id":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","distinct_id":"uid-3","$screen_density":2,"$locale":"en-GB","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","$app_version":"1.1.7","$app_name":"RudderLabs JavaScript SDK","$app_namespace":"com.rudderlabs.javascript","$app_build":"1.0.0","$os":"Mac OS","$browser":"Chrome","$browser_version":"86.0.4240.111","$host":"localhost:1112","path":"path","referrer":"referrer","search":"search","KEY_3":{"CHILD_KEY_4":"value_3","CHILD_KEY_5":"value_4"},"title":"title","url":"url","total":1009,"products":[{"product_id":"507f1f77bcf86cd79943901ghh1","sku":"45790-38","name":"Monopoly: 7rd Edition","price":19,"position":"1","category":"Cars","quantity":4,"currency":"USD","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"},{"product_id":"507f1f77bcf86cd79943901gth1","sku":"45790-39","name":"Monopoly: 8th Edition","price":19,"quantity":2,"position":"1","currency":"USD","category":"Cars","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"}]},"timestamp":"2020-11-04T13:21:09.712Z","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"capture"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "4",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com/"}},"message":{"type":"screen","event":"HomePage","sentAt":"2020-11-12T21:12:54.117Z","userId":"sajal","channel":"mobile","context":{"os":{"name":"Android","version":"10"},"app":{"name":"AMTestProject","build":"1","version":"1.0","namespace":"com.rudderstack.android.rudderstack.sampleAndroidApp"},"device":{"id":"9c6bd77ea9da3e68","name":"raphaelin","type":"Android","model":"Redmi K20 Pro","manufacturer":"Xiaomi"},"locale":"en-IN","screen":{"width":1080,"height":2210,"density":440},"traits":{"id":"sajal","age":"30","name":"User_id_identify","email":"identify@test.com","phone":"9112340345","price":"56.0","userId":"sajal","address":{"city":"KOlkata","state":"West bengal","street":"Park Street","country":"India","postalcode":"700096"},"birthday":"2020-11-13","lastname":"Mohanta","quantity":"5","username":"Samle_putUserName","createdat":"18th March 2020","firstname":"Sajal","anonymousId":"9c6bd77ea9da3e68","description":"Sample description"},"library":{"name":"com.rudderstack.android.sdk.core","version":"1.0.8"},"network":{"wifi":true,"carrier":"airtel","cellular":true,"bluetooth":false},"timezone":"Asia/Kolkata","userAgent":"Dalvik/2.1.0 (Linux; U; Android 10; Redmi K20 Pro MIUI/V12.0.3.0.QFKINXM)"},"messageId":"1605215561320-917a2554-87fd-4f9e-881d-9d29e8f30490","properties":{"name":"HomePage"},"anonymousId":"9c6bd77ea9da3e68","integrations":{"All":true},"originalTimestamp":"2020-11-12T21:12:41.320Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"properties":{"$set":{"id":"sajal","age":"30","name":"User_id_identify","email":"identify@test.com","phone":"9112340345","price":"56.0","userId":"sajal","address":{"city":"KOlkata","state":"West bengal","street":"Park Street","country":"India","postalcode":"700096"},"birthday":"2020-11-13","lastname":"Mohanta","quantity":"5","username":"Samle_putUserName","createdat":"18th March 2020","firstname":"Sajal","anonymousId":"9c6bd77ea9da3e68","description":"Sample description"},"$os":"Android","$screen_height":2210,"$screen_width":1080,"$lib":"com.rudderstack.android.sdk.core","$lib_version":"1.0.8","$time":"2020-11-12T21:12:41.320Z","$device_id":"9c6bd77ea9da3e68","$timestamp":"2020-11-12T21:12:41.320Z","$anon_distinct_id":"9c6bd77ea9da3e68","distinct_id":"sajal","$screen_density":440,"$device_manufacturer":"Xiaomi","$os_version":"10","$timezone":"Asia/Kolkata","$locale":"en-IN","$useragent":"Dalvik/2.1.0 (Linux; U; Android 10; Redmi K20 Pro MIUI/V12.0.3.0.QFKINXM)","$app_version":"1.0","$device_name":"raphaelin","$network_carrier":"airtel","$app_name":"AMTestProject","$device_model":"Redmi K20 Pro","$app_namespace":"com.rudderstack.android.rudderstack.sampleAndroidApp","$app_build":"1","$screen_name":"HomePage","name":"HomePage"},"timestamp":"2020-11-12T21:12:41.320Z","distinct_id":"sajal","messageId":"1605215561320-917a2554-87fd-4f9e-881d-9d29e8f30490","event":"$screen","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"screen"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog identify call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com/"}},"message":{"type":"identify","event":"identify","sentAt":"2020-11-12T21:12:54.117Z","userId":"sajal","channel":"mobile","context":{"os":{"name":"Android","version":"10"},"app":{"name":"AMTestProject","build":"1","version":"1.0","namespace":"com.rudderstack.android.rudderstack.sampleAndroidApp"},"device":{"id":"9c6bd77ea9da3e68","name":"raphaelin","type":"Android","model":"Redmi K20 Pro","manufacturer":"Xiaomi"},"locale":"en-IN","screen":{"width":1080,"height":2210,"density":440},"traits":{"id":"sajal","age":"30","name":"User_id_identify","email":"identify@test.com","phone":"9112340345","price":"56.0","userId":"sajal","address":{"city":"KOlkata","state":"West bengal","street":"Park Street","country":"India","postalcode":"700096"},"birthday":"2020-11-13","lastname":"Mohanta","quantity":"5","username":"Samle_putUserName","createdat":"18th March 2020","firstname":"Sajal","anonymousId":"9c6bd77ea9da3e68","description":"Sample description"},"library":{"name":"com.rudderstack.android.sdk.core","version":"1.0.8"},"network":{"wifi":true,"carrier":"airtel","cellular":true,"bluetooth":false},"timezone":"Asia/Kolkata","userAgent":"Dalvik/2.1.0 (Linux; U; Android 10; Redmi K20 Pro MIUI/V12.0.3.0.QFKINXM)"},"messageId":"1605215561266-084c95fb-aaf6-4abf-9b3b-7ac449a2d4fb","anonymousId":"9c6bd77ea9da3e68","integrations":{"All":true},"originalTimestamp":"2020-11-12T21:12:41.266Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"distinct_id":"sajal","timestamp":"2020-11-12T21:12:41.266Z","messageId":"1605215561266-084c95fb-aaf6-4abf-9b3b-7ac449a2d4fb","$set":{"id":"sajal","age":"30","name":"User_id_identify","email":"identify@test.com","phone":"9112340345","price":"56.0","userId":"sajal","address":{"city":"KOlkata","state":"West bengal","street":"Park Street","country":"India","postalcode":"700096"},"birthday":"2020-11-13","lastname":"Mohanta","quantity":"5","username":"Samle_putUserName","createdat":"18th March 2020","firstname":"Sajal","anonymousId":"9c6bd77ea9da3e68","description":"Sample description"},"properties":{"$os":"Android","$screen_height":2210,"$screen_width":1080,"$lib":"com.rudderstack.android.sdk.core","$lib_version":"1.0.8","$time":"2020-11-12T21:12:41.266Z","$device_id":"9c6bd77ea9da3e68","$timestamp":"2020-11-12T21:12:41.266Z","$anon_distinct_id":"9c6bd77ea9da3e68","distinct_id":"sajal","$screen_density":440,"$device_manufacturer":"Xiaomi","$os_version":"10","$timezone":"Asia/Kolkata","$locale":"en-IN","$useragent":"Dalvik/2.1.0 (Linux; U; Android 10; Redmi K20 Pro MIUI/V12.0.3.0.QFKINXM)","$app_version":"1.0","$device_name":"raphaelin","$network_carrier":"airtel","$app_name":"AMTestProject","$device_model":"Redmi K20 Pro","$app_namespace":"com.rudderstack.android.rudderstack.sampleAndroidApp","$app_build":"1"},"event":"$identify","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"identify"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog track call with custom event",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com"}},"message":{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.7"},"traits":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r1@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.7"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","locale":"en-GB","os":{"name":"","version":""},"screen":{"density":2},"campaign":{},"page":{"path":"/Rectified.html","referrer":"http://localhost:1112/","search":"","title":"","url":"http://localhost:1112/Rectified.html"},"ip":"0.0.0.0","userID":"sampleUserOption"},"type":"track","messageId":"07cd68e5-9ad9-4a79-af51-f7118bc9ed71","originalTimestamp":"2020-11-04T13:21:09.712Z","anonymousId":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","userId":null,"event":"order completed","properties":{"path":"path","referrer":"referrer","search":"search","KEY_3":{"CHILD_KEY_4":"value_3","CHILD_KEY_5":"value_4"},"title":"title","url":"url","total":1009,"products":[{"product_id":"507f1f77bcf86cd79943901ghh1","sku":"45790-38","name":"Monopoly: 7rd Edition","price":19,"position":"1","category":"Cars","quantity":4,"currency":"USD","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"},{"product_id":"507f1f77bcf86cd79943901gth1","sku":"45790-39","name":"Monopoly: 8th Edition","price":19,"quantity":2,"position":"1","currency":"USD","category":"Cars","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"}]},"integrations":{"All":true},"sentAt":"2020-11-04T13:21:09.712Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"distinct_id":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","event":"order completed","messageId":"07cd68e5-9ad9-4a79-af51-f7118bc9ed71","properties":{"$set":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r1@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"$current_url":"http://localhost:1112/Rectified.html","$pathname":"/Rectified.html","$lib":"RudderLabs JavaScript SDK","$lib_version":"1.1.7","$time":"2020-11-04T13:21:09.712Z","$ip":"0.0.0.0","$timestamp":"2020-11-04T13:21:09.712Z","$anon_distinct_id":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","distinct_id":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","$screen_density":2,"$locale":"en-GB","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","$app_version":"1.1.7","$app_name":"RudderLabs JavaScript SDK","$app_namespace":"com.rudderlabs.javascript","$app_build":"1.0.0","$os":"Mac OS","$browser":"Chrome","$browser_version":"86.0.4240.111","$host":"localhost:1112","path":"path","referrer":"referrer","search":"search","KEY_3":{"CHILD_KEY_4":"value_3","CHILD_KEY_5":"value_4"},"title":"title","url":"url","total":1009,"products":[{"product_id":"507f1f77bcf86cd79943901ghh1","sku":"45790-38","name":"Monopoly: 7rd Edition","price":19,"position":"1","category":"Cars","quantity":4,"currency":"USD","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"},{"product_id":"507f1f77bcf86cd79943901gth1","sku":"45790-39","name":"Monopoly: 8th Edition","price":19,"quantity":2,"position":"1","currency":"USD","category":"Cars","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"}]},"timestamp":"2020-11-04T13:21:09.712Z","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"capture"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog track call with custom event",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com"}},"message":{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.7"},"traits":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r1@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.7"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","locale":"en-GB","os":{"name":"","version":""},"screen":{"density":2},"campaign":{},"page":{"path":"/Rectified.html","referrer":"http://localhost:1112/","search":"","title":"","url":"http://localhost:1112/Rectified.html"},"ip":"0.0.0.0","userID":"sampleUserOption"},"type":"track","messageId":"07cd68e5-9ad9-4a79-af51-f7118bc9ed71","originalTimestamp":"2020-11-04T13:21:09.712Z","anonymousId":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","userId":123,"event":"order completed","properties":{"path":"path","referrer":"referrer","search":"search","KEY_3":{"CHILD_KEY_4":"value_3","CHILD_KEY_5":"value_4"},"title":"title","url":"url","total":1009,"products":[{"product_id":"507f1f77bcf86cd79943901ghh1","sku":"45790-38","name":"Monopoly: 7rd Edition","price":19,"position":"1","category":"Cars","quantity":4,"currency":"USD","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"},{"product_id":"507f1f77bcf86cd79943901gth1","sku":"45790-39","name":"Monopoly: 8th Edition","price":19,"quantity":2,"position":"1","currency":"USD","category":"Cars","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"}]},"integrations":{"All":true},"sentAt":"2020-11-04T13:21:09.712Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"distinct_id":"123","event":"order completed","messageId":"07cd68e5-9ad9-4a79-af51-f7118bc9ed71","properties":{"$set":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r1@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"$current_url":"http://localhost:1112/Rectified.html","$pathname":"/Rectified.html","$lib":"RudderLabs JavaScript SDK","$lib_version":"1.1.7","$time":"2020-11-04T13:21:09.712Z","$ip":"0.0.0.0","$timestamp":"2020-11-04T13:21:09.712Z","$anon_distinct_id":"a47b753d-c7d3-40ca-88dc-a1bb79e997e8","distinct_id":"123","$screen_density":2,"$locale":"en-GB","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","$app_version":"1.1.7","$app_name":"RudderLabs JavaScript SDK","$app_namespace":"com.rudderlabs.javascript","$app_build":"1.0.0","$os":"Mac OS","$browser":"Chrome","$browser_version":"86.0.4240.111","$host":"localhost:1112","path":"path","referrer":"referrer","search":"search","KEY_3":{"CHILD_KEY_4":"value_3","CHILD_KEY_5":"value_4"},"title":"title","url":"url","total":1009,"products":[{"product_id":"507f1f77bcf86cd79943901ghh1","sku":"45790-38","name":"Monopoly: 7rd Edition","price":19,"position":"1","category":"Cars","quantity":4,"currency":"USD","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"},{"product_id":"507f1f77bcf86cd79943901gth1","sku":"45790-39","name":"Monopoly: 8th Edition","price":19,"quantity":2,"position":"1","currency":"USD","category":"Cars","url":"https://www.example.com/product/path","image_url":"https://www.example.com/product/path.jpg"}]},"timestamp":"2020-11-04T13:21:09.712Z","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"capture"},"XML":{},"JSON_ARRAY":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog group call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com/","useV2Group":false}},"message":{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.5"},"traits":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.5"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36","locale":"en-US","os":{"name":"","version":""},"screen":{"density":0.8999999761581421},"page":{"path":"/destinations/amplitude","referrer":"","search":"","title":"","url":"https://docs.rudderstack.com/destinations/amplitude","category":"destination","initial_referrer":"https://docs.rudderstack.com","initial_referring_domain":"docs.rudderstack.com"}},"type":"group","messageId":"e5034df0-a404-47b4-a463-76df99934fea","anonymousId":"my-anonymous-id-new","userId":"sampleusrRudder7","integrations":{"All":true},"groupId":"Sample_groupId27","traits":{"groupType":"company","KEY_3":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"KEY_2":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"name_trait":"Company","value_trait":"Comapny-ABC"},"sentAt":"2020-10-20T07:54:58.983Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"groupId":"Sample_groupId27","distinct_id":"sampleusrRudder7","traits":{"groupType":"company","KEY_3":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"KEY_2":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"name_trait":"Company","value_trait":"Comapny-ABC"},"messageId":"e5034df0-a404-47b4-a463-76df99934fea","properties":{"$set":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"$current_url":"https://docs.rudderstack.com/destinations/amplitude","$pathname":"/destinations/amplitude","$lib":"RudderLabs JavaScript SDK","$lib_version":"1.1.5","$anon_distinct_id":"my-anonymous-id-new","distinct_id":"sampleusrRudder7","$screen_density":0.8999999761581421,"$locale":"en-US","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36","$app_version":"1.1.5","$app_name":"RudderLabs JavaScript SDK","$app_namespace":"com.rudderlabs.javascript","$app_build":"1.0.0","$os":"Mac OS","$browser":"Chrome","$browser_version":"85.0.4183.121","$host":"docs.rudderstack.com"},"event":"$groupidentify","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"group"},"JSON_ARRAY":{},"XML":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog group call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com/","useV2Group":true}},"message":{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.5"},"traits":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.5"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36","locale":"en-US","os":{"name":"","version":""},"screen":{"density":0.8999999761581421},"page":{"path":"/destinations/amplitude","referrer":"","search":"","title":"","url":"https://docs.rudderstack.com/destinations/amplitude","category":"destination","initial_referrer":"https://docs.rudderstack.com","initial_referring_domain":"docs.rudderstack.com"}},"type":"group","messageId":"e5034df0-a404-47b4-a463-76df99934fea","anonymousId":"my-anonymous-id-new","userId":"sampleusrRudder7","integrations":{"All":true},"groupId":"Sample_groupId27","traits":{"groupType":"company","KEY_3":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"KEY_2":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"name_trait":"Company","value_trait":"Comapny-ABC"},"sentAt":"2020-10-20T07:54:58.983Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"properties":{"$set":{"name":"Shehan Study","category":"SampleIdentify","email":"chandra+r@rudderlabs.com","plan":"Open source","logins":5,"createdAt":1599264000},"$current_url":"https://docs.rudderstack.com/destinations/amplitude","$pathname":"/destinations/amplitude","$lib":"RudderLabs JavaScript SDK","$lib_version":"1.1.5","$anon_distinct_id":"my-anonymous-id-new","distinct_id":"sampleusrRudder7","$screen_density":0.8999999761581421,"$locale":"en-US","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36","$app_version":"1.1.5","$app_name":"RudderLabs JavaScript SDK","$app_namespace":"com.rudderlabs.javascript","$app_build":"1.0.0","$os":"Mac OS","$browser":"Chrome","$browser_version":"85.0.4183.121","$host":"docs.rudderstack.com","$group_key":"Sample_groupId27","$group_set":{"KEY_3":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"KEY_2":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"name_trait":"Company","value_trait":"Comapny-ABC"},"$group_type":"company","$groups":{"company":"Sample_groupId27"}},"distinct_id":"sampleusrRudder7","messageId":"e5034df0-a404-47b4-a463-76df99934fea","event":"$groupidentify","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"group"},"JSON_ARRAY":{},"XML":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog group call for all utm properties",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com/","useV2Group":true}},"message":{"channel":"web","context":{"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36","locale":"en-US","page":{"path":"/destinations/amplitude","referrer":"","search":"","title":"","url":"https://docs.rudderstack.com/destinations/amplitude","category":"destination","initial_referrer":"https://docs.rudderstack.com","initial_referring_domain":"docs.rudderstack.com","loaded":"20"},"campaign":{"source":"google","medium":"medium","term":"keyword","content":"some content","name":"some campaign"}},"type":"group","messageId":"e50df0-a404-47b4-a463-76df99934fea","anonymousId":"newid@1234","userId":"user@1234","integrations":{"All":true},"groupId":"group@1234","traits":{"groupType":"company","KEY_3":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"KEY_2":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"name_trait":"Company","value_trait":"Comapny-ABC"},"sentAt":"2022-08-12T07:54:58.983Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"params":{},"body":{"JSON":{"properties":{"$current_url":"https://docs.rudderstack.com/destinations/amplitude","$pathname":"/destinations/amplitude","$anon_distinct_id":"newid@1234","distinct_id":"user@1234","$locale":"en-US","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36","utm_source":"google","utm_medium":"medium","utm_campaign":"some campaign","utm_content":"some content","utm_term":"keyword","$performance_page_loaded":"20","$os":"Mac OS","$browser":"Chrome","$browser_version":"85.0.4183.121","$host":"docs.rudderstack.com","$group_key":"group@1234","$group_set":{"KEY_3":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"KEY_2":{"CHILD_KEY_92":"value_95","CHILD_KEY_102":"value_103"},"name_trait":"Company","value_trait":"Comapny-ABC"},"$group_type":"company","$groups":{"company":"group@1234"}},"distinct_id":"user@1234","messageId":"e50df0-a404-47b4-a463-76df99934fea","event":"$groupidentify","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"group"},"JSON_ARRAY":{},"XML":{},"FORM":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "PostHog track call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","yourInstance":"https://app.posthog.com"}},"message":{"channel":"web","context":{"traits":{"name":"Rudder Usr","category":"SampleIdentify","email":"mihirb@rudderlabs.com","plan":"Paid","logins":5},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","locale":"en-GB","page":{"path":"/Rectified.html","referrer":"http://localhost:1112/","url":"http://localhost:1112/Rectified.html","loaded":"40"},"userID":"user@2345"},"type":"track","messageId":"07cde5-9ad9-4a79-af51-f71bc9ed71","originalTimestamp":"2022-08-12T13:21:09.712Z","anonymousId":"a4753d-c7d3-40ca-88dc-a1bbe997e8","userId":"uid-1234","event":"card checkout","properties":{"path":"path","referrer":"referrer","search":"search","title":"title","url":"url","total":1009,"viewport_height":"173","viewport_width":"969"},"integrations":{"All":true},"sentAt":"2022-08-12T13:21:09.712Z"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"version":"1","type":"REST","params":{},"method":"POST","endpoint":"https://app.posthog.com/batch","headers":{"Content-Type":"application/json"},"body":{"XML":{},"FORM":{},"JSON":{"messageId":"07cde5-9ad9-4a79-af51-f71bc9ed71","distinct_id":"uid-1234","properties":{"$set":{"name":"Rudder Usr","category":"SampleIdentify","email":"mihirb@rudderlabs.com","plan":"Paid","logins":5},"$os":"Mac OS","url":"url","path":"path","$host":"localhost:1112","$time":"2022-08-12T13:21:09.712Z","$timestamp":"2022-08-12T13:21:09.712Z","title":"title","total":1009,"search":"search","$locale":"en-GB","$browser":"Chrome","referrer":"referrer","$pathname":"/Rectified.html","$useragent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36","distinct_id":"uid-1234","$current_url":"http://localhost:1112/Rectified.html","$viewport_width":"969","$browser_version":"86.0.4240.111","$viewport_height":"173","$anon_distinct_id":"a4753d-c7d3-40ca-88dc-a1bbe997e8","$performance_page_loaded":"40","viewport_height":"173","viewport_width":"969"},"event":"card checkout","timestamp":"2022-08-12T13:21:09.712Z","api_key":"K_HlByO3IE73-Tz4ch1LNDs0JGdwbknNGolFc4HdoAE","type":"capture"},"JSON_ARRAY":{}},"files":{},"userId":""}, 
          "statusCode": 200}]
                }
            } 
         },{
            "name": "posthog",
            "description":  "Pass userTraits for track call",
            "feature": "processor",
            "module": "destination",
            "version": "v0",
            "input": {
                "request": {
                    "body": [
                        {"destination":{"Config":{"teamApiKey":"phc_HiQkvGt9vktokentokentokenTN","yourInstance":"https://app.posthog.com"}},"message":{"type":"track","event":"Product Brought","userId":"uid-2","context":{"ip":"0.0.0.0","os":{"name":"android","version":"8.1.0"},"device":{"id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","name":"xiaomi","model":"Redmi 6","manufacturer":"Xiaomi"},"traits":{"id":"Virat KohliProX","age":"30","name":"User_id_identify","email":"identify@test.com","phone":"9112340345","price":"56.0","userId":"Virat","address":{"city":"KOlkata","state":"West bengal","street":"Park Street","country":"India","postalcode":"700096"},"birthday":"2020-11-13","lastname":"KohliDa","quantity":"5","username":"Kohli_putUserName1","createdat":"18th March 2020","firstname":"Sajal","anonymousId":"9c6bd77ea9da3e68","description":"Sample description"},"network":{"carrier":"Banglalink"}},"rudderId":"ee5c68e2-ecea-4aaf-a885-d0611eb8827b","messageId":"e4408cb8-16dd-41e9-a313-a7a9cdc4bac5","properties":{"isf":"False","idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","level":6,"game_id":"fireEagleBase","game_fps":30,"is_turbo":"False","battle_id":"N/A","bet_level":1,"game_name":"FireEagleSlots","bet_amount":9,"fb_profile":"0","no_of_spin":1,"start_date":"2019-08-01","win_amount":0,"extra_param":"N/A","gem_balance":0,"coin_balance":9466052,"days_in_game":0,"is_auto_spin":"False","ishighroller":"False","tournament_id":"T1561970819","bet_multiplier":1,"isLowEndDevice":"False","total_payments":0,"featureGameType":"N/A","graphicsQuality":"HD","jackpot_win_type":"Silver","jackpot_win_amount":90,"current_module_name":"CasinoGameModule","versionSessionCount":2,"additional_bet_index":0,"internetReachability":"ReachableViaLocalAreaNetwork","lifetime_gem_balance":0,"player_total_battles":0,"player_total_shields":0},"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1"}},
                    ],
                    "method": "POST",
                },
                "pathSuffix": "",
            },
            "output":{
                "response": {
                    "status": 200,
                    "body": [{
          "output": 
          {"body":{"XML":{},"FORM":{},"JSON":{"type":"capture","event":"Product Brought","api_key":"phc_HiQkvGt9vktokentokentokenTN","messageId":"e4408cb8-16dd-41e9-a313-a7a9cdc4bac5","properties":{"$ip":"0.0.0.0","$os":"android","isf":"False","$set":{"id":"Virat KohliProX","age":"30","name":"User_id_identify","email":"identify@test.com","phone":"9112340345","price":"56.0","userId":"Virat","address":{"city":"KOlkata","state":"West bengal","street":"Park Street","country":"India","postalcode":"700096"},"birthday":"2020-11-13","lastname":"KohliDa","quantity":"5","username":"Kohli_putUserName1","createdat":"18th March 2020","firstname":"Sajal","anonymousId":"9c6bd77ea9da3e68","description":"Sample description"},"idfa":"2bf99787-33d2-4ae2-a76a-c49672f97252","level":6,"game_id":"fireEagleBase","game_fps":30,"is_turbo":"False","battle_id":"N/A","bet_level":1,"game_name":"FireEagleSlots","$device_id":"df16bffa-5c3d-4fbb-9bce-3bab098129a7R","bet_amount":9,"fb_profile":"0","no_of_spin":1,"start_date":"2019-08-01","win_amount":0,"$os_version":"8.1.0","distinct_id":"uid-2","extra_param":"N/A","gem_balance":0,"$device_name":"xiaomi","coin_balance":9466052,"days_in_game":0,"is_auto_spin":"False","ishighroller":"False","$device_model":"Redmi 6","tournament_id":"T1561970819","bet_multiplier":1,"isLowEndDevice":"False","total_payments":0,"featureGameType":"N/A","graphicsQuality":"HD","$network_carrier":"Banglalink","jackpot_win_type":"Silver","$anon_distinct_id":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","jackpot_win_amount":90,"current_module_name":"CasinoGameModule","versionSessionCount":2,"$device_manufacturer":"Xiaomi","additional_bet_index":0,"internetReachability":"ReachableViaLocalAreaNetwork","lifetime_gem_balance":0,"player_total_battles":0,"player_total_shields":0},"distinct_id":"uid-2"},"JSON_ARRAY":{}},"type":"REST","files":{},"method":"POST","params":{},"headers":{"Content-Type":"application/json"},"version":"1","endpoint":"https://app.posthog.com/batch","userId":""}, 
          "statusCode": 200}]
                }
            } 
         }]; module.exports = {
        data
    }