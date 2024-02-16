   const form=document.getElementById("weatherForm")
   const latitudeInput=document.getElementById("latitude")
   const longitudeInput=document.getElementById("longitude")
   const resultContainer=document.getElementById("result")
   const aqiReasult=document.getElementById("aqi")
   const coResult=document.getElementById("co")
   const no2Result=document.getElementById("no2")
   const o3Result=document.getElementById("o3")
   const pm2Resultpm2=document.getElementById("pm2")
   const so2Result=document.getElementById("so2")
   
   form.addEventListener('submit',(event)=>{
        event.preventDefault();
         const latitude= latitudeInput.value;
         const longitude= longitudeInput.value;
         const url= 'https://air-quality.p.rapidapi.com/history/airquality?lon=-78.638&lat=35.779';
         const options = {
          method: 'GET',
          headers: {
               'X-RapidAPI-Key': 'dbd5751f37msh692abf144cde4f2p1f2aa5jsn2a91f506905c',
               'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
          }
          };
          fetch(url,options)
            .then( response=> response.json())
            .then(result=>{
               let readings=result.data[0];
               console.log(readings);
               aqiResult.textContent=readings.aqi;
               coResult.textContent=readings.co;
               no2Result.textContent=readings.no2;
               o3Result.textContent=readings.o3;
               pm2Result.textContent=readings.pm2;
               so2Result.textContent=readings.so2;
              resultContainer.style.display='flex';
              
            })
          });