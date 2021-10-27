{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.meetings[i18nText-lang]['labels'] -%}
{%- capture clear_button_html -%}
<button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
{%- endcapture -%}

<div class="wb-frmvld">
    <form name="meeting-form" id="new-meeting-form" method="post" action="/meetings/meetings" class="form-horizontal wb-postback" data-wb-postback="{&quot;success&quot;:&quot;.success-message&quot;,&quot;failure&quot;:&quot;.failure-message&quot;,&quot;content&quot;:&quot;.form-content&quot;,&quot;toggle&quot;:&quot;hide&quot;}">
    {%- include meetings/form.markdown -%}
    </form>
    <section class="alert alert-success success-message hide">
        <h3>{{ i18n-form.create_subheader_success }}</h3>
        <p>{{ i18n-form.create_message_success }}</p>
    </section>
    <section class="alert alert-danger failure-message hide">
        <p>{{ i18n-form.create_message_failure }}</p>
    </section>
</div>