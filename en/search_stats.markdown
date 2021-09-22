---
layout: cadc
lang: en
permalink: /en/search_stats
title: Search statistics
# altLangPage: /fr/recherche_stats
dateModified: 2021-07-04
---

<style>
  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 23px;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: table;
    border-collapse: separate;
    -webkit-border-horizontal-spacing: 2px;
    -webkit-border-vertical-spacing: 2px;
    border-top-color: gray;
  }

  table > tbody > tr > td {
    padding: 8px;
    line-height: 1.4375;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }

  table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    padding: 8px;
    line-height: 1.4375;
  }
</style>

### 47834 queries since 2019-09-27

|                         UType                            | Count     | %         |
| -------------------------------------------------------- | :--------:| ---------:|
| **Collection** (Observation.collection)                  | 44441     |   92.91   |
| **Target** (Plane.position.bounds@Shape1.value)          | 28234     |   59.02   |
| **Instrument** (Observation.instrument.name)             | 27763     |   58.04   |
| **Data Type** (Plane.dataProductType)                                    | 11572     |   24.19   |
| **Filter** (Plane.energy.bandpassName)                                | 10460     |   21.87   |
| **Cal. Lev.** (Plane.calibrationLevel)                                   |  9124     |   19.07   |
| **Observation Date** (Plane.time.bounds.samples@Date.value)                     |  6180     |   12.92   |
| **Obs. Type** (Observation.type)                                         |  5769     |   12.06   |
| Proposal ID (Observation.proposal.id)                                  |  4014     |    8.39   |
| Band (Plane.energy.emBand)                                      |  3867     |    8.08   |
| Observation ID (Observation.observationID)                                |  2643     |    5.53   |
| P.I. Name (Observation.proposal.pi)                                  |  2473     |    5.17   |
| Science and Calibration data - **not** set to default value (Observation.intent)                                       |  2099     |    4.39   |
| Observation Date > _Data obtained within the past:_ (Plane.time.bounds.samples_PRESET@Date.value)              |  1112     |    2.32   |
| Do Spatial Cutout (Plane.position.DOWNLOADCUTOUT)                            |   520     |    1.09   |
| Spectral Coverage (Plane.energy.bounds.samples@Energy.value)                 |   435     |    0.91   |
| Proposal Project > _results page bookmark URL ONLY_ (Observation.proposal.project)                             |   353     |    0.74   |
| Proposal Keywords (Observation.proposal.keywords)                            |   289     |    0.60   |
| Proposal Title (Observation.proposal.title)                               |   268     |    0.56   |
| Integration Time (Plane.time.exposure)                                      |   246     |    0.51   |
| Pixel Scale (Plane.position.sampleSize)                                |   196     |    0.41   |
| Resolving Power (Plane.energy.resolvingPower)                              |   170     |    0.36   |
| Data Release Date > _Public only_ (Plane.dataRelease@PublicTimestampFormConstraint.value)    |   170     |    0.36   |
| Data Release Date (Plane.dataRelease)                                        |   126     |    0.26   |
| Time Span (Plane.time.bounds.width)                                  |    98     |    0.20   |
| Do Spectral Cutout (Plane.energy.DOWNLOADCUTOUT)                              |    95     |    0.20   |
| Bandpass Width (Plane.energy.bounds.width)                                |    81     |    0.17   |
| Spectral Sampling (Plane.energy.sampleSize)                                  |    75     |    0.16   |
| Rest-frame Energy (Plane.energy.restwav)                                     |    75     |    0.16   |
