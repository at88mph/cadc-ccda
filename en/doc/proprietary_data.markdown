---
layout: cadc
lang: en
permalink: /en/doc/props/
title: Proprietary Data
altLangPage: /fr/doc/props/
dateModified: 2022-10-03
signing: layout.signing
nav: doc

breadcrumbs:
    - link: /en/doc
      title: Documentation
---

<p>The CANFAR/CADC Group system enables controlled access to particular datasets.</p>

<p>
Each telescopic observations is protected from anonymous access while
the current date is before the Release Date specified in the related
CAOM record.  If no CAOM record is available for a given observation,
that observation is considered private. All private data can only be
accessed by members of special authorzation groups that are associated with
observations via its CAOM record.
</p>

<p>Every telecsope observation can be access by members of two special groups.  The archive group and the proposal group.</p>

<h2>Archive Group</h2>
<p>
The archive group name is established by the CADC when the
telescope archive is first created.  Members of that group have
priviledge access to all data in the given telescope's archive and have
the ability to add new observations to the archive.
</p>

<h2>Proposal Groups</h2>
<p>
When a CAOM record is created the value of the <code>proposal_id</code> attribute
can be set.  The CADC automatically allows members of the
ARHCIVE-proposal_id group priviledge access to all observations
associated with the given proposal_id.  These groups can be created by the members
of the Archive Group or they are automatically created when the
first CAOM record for a given proposal_id is added to the CADC CAOM database.
</p>

<p>
Initially, only members of the Archive Group and add CADC users to 
a given Proposal Group.  Any member of the Archive Group can, hwoever, added any CADC
user as an administrator of a Proposal Group associated with that archive.  Adding 
a member to the Administrative Group of an Archive Group allows that
user to add other CADC users to the Proposal Group, thus providing data sharing.  Normally
the an member of the Archive Group will make the User ID of the PI of a proposal 
the Administrator of a Proposal Group.
</p>

<p>The Group membership is managed via a <a href="/en/groups/">web UI</a> or via the <a href="../groups">Python tools</a>.</p>