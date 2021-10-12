<div class="wb-frmvld">
    {% comment %}
    ,&quot;method&quot;:&quot;PUT&quot;}"
    {% endcomment %}
    <form name="meeting-form" id="new-meeting-form" action="#" class="form-horizontal wb-postback" data-wb-postback="{&quot;success&quot;:&quot;.success-message&quot;,&quot;failure&quot;:&quot;.failure-message&quot;,&quot;content&quot;:&quot;.form-content&quot;,&quot;toggle&quot;:&quot;hide&quot;}">
    {%- include meetings/form.markdown -%}
    <button type="reset" class="btn btn-default pull-right">{{ i18n-form.reset }}</button>
    </form>
    <section class="alert alert-success success-message hide">
        <p>{{ i18n-form.create_message_success }}</p>
    </section>
    <section class="alert alert-danger failure-message hide">
        <p>{{ i18n-form.create_message_failure }}</p>
    </section>
</div>