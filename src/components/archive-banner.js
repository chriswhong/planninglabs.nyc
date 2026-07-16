import React from 'react';

const ArchiveBanner = () => (
  <div className="archive-banner">
    <div className="grid-container">
      <p>
        <strong>Archived Site</strong>
        {' — NYC Planning Labs was a digital services team at the NYC Department of City Planning that built web-based urban planning tools. This archive is '}
        <strong>not affiliated with or maintained by New York City government</strong>
        {'. It was republished in 2026 from a fork of the '}
        <a
          href="https://github.com/NYCPlanning/labs-home"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source codebase
        </a>
        {' and hosted on GitHub Pages for posterity.'}
      </p>
    </div>
  </div>
);

export default ArchiveBanner;
