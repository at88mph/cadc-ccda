{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.dao[i18nText-lang]['labels'] -%}

{%- assign dynamic_data_host = "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca" -%}

<div class="col-md-12">
	<div id="dao_stats" class="col-sm-12 panel panel-default"></div>
	<div class="col-sm-12 panel panel-default">
		<div class="col-sm-6 panel-body brdr-rght">
			<p class="h3">{{ i18n-labels.1_2_dome }}</p><br />
			<a href="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/domecam_48.jpg" class="ui-link"><img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/domecam_48.jpg"></a>
		</div>
		<div class="col-sm-6 panel-body brdr-lft">
			<p class="h3">{{ i18n-labels.1_8_dome }}</p><br />
			<a href="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/domecam_72.jpg" class="ui-link"><img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/domecam_72.jpg"></a>
		</div>
	</div>
	<div class="col-sm-12 panel panel-default">
		<div class="col-sm-4 panel-body brdr-rght">
			<p class="h4">{{ i18n-labels.1_2_guide }}</p><br />
			<a href="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/guider_12.jpg" class="ui-link"><img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/guider_12.jpg"></a>
		</div>
		<div class="col-sm-4 panel-body brdr-rght brdr-lft">
			<p class="h4">{{ i18n-labels.1_8_guide }}</p><br />
			<a href="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/guider_18.jpg" class="ui-link"><img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/guider_18.jpg"></a>
		</div>
		<div class="col-sm-4 panel-body brdr-lft">
			<p class="h4">{{ i18n-labels.1_8_slit }}</p><br />
			<a href="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/slit_18.jpg" class="ui-link"><img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/slit_18.jpg"></a>
		</div>
	</div>
	<div class="col-sm-12 panel panel-default">
		<div class="panel-body">
			<a href="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/ccdTemps.png" class="ui-link"><img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/ccdTemps.png"></a>
		</div>
	</div>
</div>