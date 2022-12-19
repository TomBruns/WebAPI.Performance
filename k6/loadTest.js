import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 30 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
//  const res = http.get('https://localhost:7067/WeatherForecast');
  const res = http.get('https://localhost:5001/WeatherForecast');
  check(res, { 'status was 200': (r) => r.status == 200 });
//  sleep(1);
}