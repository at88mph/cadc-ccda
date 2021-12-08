{%- include variable-core.liquid -%}
{%- assign i18n-form=site.data.megapipe[i18nText-lang]['labels'] -%}

<form name="cutout" action="/cadcbin/megapipe/imc.pl">
    <input id="lang" type="hidden" name="lang" value="en" />
    <div class="form-group">
        <label for="object" class="control-label">{{ i18n-form.object_name }}</label>
        <input id="object" type="text" name="object" class="form-control" value="" onkeypress="return resolveenter(event)"/>
        <input type="button" class="btn btn-default" name="resolve" value="{{ i18n-form.resolve }}" onclick="simpleSearch(document.cutout.object.value)"/>
    </div>
    <div class="form-group">
        <label for="ra" class="control-label">{{ i18n-form.right_ascension }}</label>
        <input id="ra" type="text" name="ra" class="form-control" value="" />
    </div>
    <div class="form-group">
        <label for="dec" class="control-label">{{ i18n-form.declination }}</label>
        <input id="dec" type="text" name="dec" class="form-control" value=""/>
    </div>
    <div class="form-group">
        <label for="size" class="control-label">{{ i18n-form.image_size_in_pixels }}</label>
        <input id="size" type="text" name="size" class="form-control" value="128" size="4" />
        <span class="text-info">{{ i18n-form.image_size_in_pixels_max }}</span>
    </div>
    <input type="submit" class="btn btn-primary" value="{{ i18n-form.submit }}" />
    <input type="reset" class="btn btn-default" value="{{ i18n-form.reset }}" />
</form>