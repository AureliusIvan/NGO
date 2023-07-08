import { google } from 'googleapis';
import axios from 'axios';
import json from "@/key.json"

const API_KEY = json.private_key_id;
const SPREADSHEET_ID = '1M2apJJ2iSxWyM-3x8l689Py5WKLXsDBJIHlQF6pX16o';
const RANGE = 'Sheet1!A1:C'; // Adjust the range based on your sheet structure

export async function getShopItems() {
    const auth = new google.auth.getClient({
        keyFile: json,
        // credentials: {
        //     private_key: json.private_key, // Or pass your private key directly
        //     client_email: json.client_email,
        // },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    }).finally((res) => {
        console.log(res)
    });

    // const sheets = google.sheets({ version: 'v4', auth });
    // const response = await sheets.spreadsheets.values.get({
    //     spreadsheetId: SPREADSHEET_ID,
    //     range: RANGE,
    // });


    const client = await auth.getClient();

    const googleSheets = google.sheets(
        {
            version: 'v4',
        })
    return response.data.values;
}
