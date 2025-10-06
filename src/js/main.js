import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Tooltip } from 'bootstrap';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
inject();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    new Tooltip(el, {
      placement: 'bottom',
    });
  });
});
