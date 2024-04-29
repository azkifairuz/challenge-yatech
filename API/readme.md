## how to run
```json
  npm i
  buat file env dan isi ini DATABASE_URL="mysql://root:@localhost:3306/klinik"
  npx migrate dev
  npm run dev
```

## coba di api test seperti postmant atau apidog 
endpoint : http://localhost:3000/registration-patien

```json
  {
    "nama": "azki",
    "tanggal": "{% faker datatype.datetime %}",
    "keluhan": "pusing dikit",
    "resep": "oskadon 3x sehari",
    "biaya": 100.000,
    "useInsurance":true,
    "insuranceName": "asuransi berkah",
    "coveredCost": 50.000
}

```
