---
layout: cadc
lang: en
permalink: /en/megapipe/docs/caveats.html
title: Caveats
altLangPage: /fr/megapipe/docs/caveats.html
dateModified: 2021-12-08
signing: layout.signing
nositesearch: layout.nositesearch
nav: megapipe
breadcrumbs:
    - link: /en/megapipe/
      title: MegaPipe
    - link: /en/megapipe/docs/caveats.html
      title: Caveats
---

<h2>Missing groups</h2>
<p>
    Some groups are not currently available in the MegaPipe
    archive. It may appear that while sufficient data has been taken
    by CFHT to warrant stacking, no group has been produced with
    MegaPipe. Possible reasons for this include:
</p>
<ul>
  <li>
      CADC does not have the Elixir processed version of some
      images. Currently, the CADC receives from CFHT raw versions of
      every MegaCam image. Elixir pre-processed versions of every
      CFHTLS image are also tranferred. For non-CFHTLS data, at
      present, only some images are transferred from CFHT to
      CADC. CFHT is currently sending Elixir processed versions of all
      available MegaCam images, so future MegaPipe generations will
      contain more groups.
  </li>
  <li>
      Photometric calibration may not be possible for a group. If
      the group does not lie in the SDSS, or if none of the images in a
      filter was taken on a photometric night (as determined with
      <a rel="external" href="https://www.cfht.hawaii.edu/Instruments/Elixir/skyprobe/home.html">SkyProbe</a>) that filter of that group will not be processed.
  </li>
  <li>
      Astrometric calibration may not be possible for a group. The
      astrometric calibration pipeline relies identifying compact
      sources. If there are not enough compact sources visible in the
      image, it can fail. Alternatively, the astrometric pipeline can
      be confused if there are too many sources. These two cases are
      discussed in the following sections.
  </li>
</ul>
<h2>Crowded fields</h2>
<p>
    The astrometric calibration depends on matching observed
    catalogues to reference catalogues. In crowded fields, the
    matching algorithm can become confused and misidentify sources in
    some cases. This causes the astrometric pipeline to fail. When
    this occurs, the resulting images have conspicuous smeared and
    doubled stars. These images have been removed from further
    analysis.
</p>
<h2>Extended sources</h2>
<p>
    Several of the tools that go into MegaPipe (AstroGwyn, SExtractor,
    SWarp) were originally developed for use for high galactic latitude
    fields. These fields contain a moderate number of compact, isolated
    sources. When the same tools are applied other fields, the results
    are not always optimal. This particularly true of fields containing
    extended sources such as nebulae or nearby galaxies. Nebulae which
    contain few compact sources cannot be astrometrically
    calibrated. Other fields contain enough sources for astrometric
    calibration, but problems arise at the SWarp stage. If the extended
    emission varies smoothly and slightly (as in a large nebula)
    SWarp's background subtraction removes the extended emission at the
    same time as it removes the sky background, leaving a blank
    field. If the extended emission has sharp variations (such as the
    spiral arm of a nearby galaxy), SWarp's background subtraction can
    produce peculiar results.
</p>
<p>
    These problems mostly affect images taken as part of
    the <a rel="external" href="https://www.cfht.hawaii.edu/HawaiianStarlight/trailer.html">Hawaiian
    Starlight program</a>, but there are a few science images affected
    as well. They will be addressed in future versions of MegaPipe. In
    the meantime, users should be aware that some background
    subtraction is taking place, which may affect extended sources.
</p>
<h2>Catalogue overlap</h2>
<p>
   Some of the MegaPipe groups overlap, usually by only a small
   margin, but sometimes by more. The catalogues from overlapping
   groups will be doubled up. That is to say, there will be sources
   that appear in two different catalogues. This fact is exploited to
   check the photometry (as discussed in
   the <a href="photo.html#intern">internal checks on photometry</a> section) but
   may be undesirable for some users.
</p>
