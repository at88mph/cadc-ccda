---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: cadc
title: New Meeting
lang: en
permalink: /en/meetings/submit-new/
altLangPage: /fr/rencontres/soumire-nouveau/
dateModified: 2021-09-30
nofooter: layout.nofooter
signing: layout.signing
nositesearch: layout.nositesearch

nav: meetings
---

<div class="wb-frmvld">
    <form name="meeting-form" id="new-meeting-form" action="/meetings/meetings" class="form-horizontal wb-postback" data-wb-postback="{&quot;success&quot;:&quot;success-message&quot;,&quot;failure&quot;:&quot;failure-message&quot;,&quot;method&quot;:&quot;PUT&quot;}">
    {%- include meeting-form.markdown -%}
    <button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
    </form>
</div>
