{%- include variable-core.liquid -%}
{%- assign i18n-labels=site.data.dao[i18nText-lang]['labels'] -%}

{%- assign dynamic_data_host = "https://ws.cadc-ccda.hia-iha.nrc-cnrc.gc.ca" -%}

<div class="full-width">
	<div class="col-sm-12 panel panel-default">
		<div class="col-sm-6 panel-body brdr-rght">
            <a href="http://weather.gc.ca/city/pages/bc-85_metric_e.html">{{ i18n-labels.env_can_weather }}</a><br><br>
		</div>
		<div class="col-sm-6 panel-body brdr-lft">
			<p class="h3">{{ i18n-labels.sky_clock }}</p>
            <a href="http://cleardarksky.com/c/DomObBCkey.html"><img class="img-responsive" src="http://cleardarksky.com/c/DomObBCcs0.gif?1" /></a>
		</div>
	</div>
	<div class="col-sm-12 panel panel-default">
		<div class="col-sm-6 panel-body brdr-rght">
			<p class="h4">{{ i18n-labels.sky_camera }}</p>
			<a href="/files/vault/DAO/Monitoring/skycamera.jpg"><img class="img-responsive" src="/files/vault/DAO/Monitoring/skycamera.jpg" /></a>
		</div>
		<div class="col-sm-6 panel-body brdr-lft">
			<p class="h4">{{ i18n-labels.ir_sat_image }}</p>
			<a href="http://weather.gc.ca/satellite/satellite_anim_e.html?sat=goes&area=wcan&type=1070"><img class="img-responsive" src="http://weather.gc.ca/data/satellite/goes_wcan_1070_100.jpg" /></a>
		</div>
	</div>
	<div class="col-sm-12 panel panel-default">
		<div class="panel-body">
            <img class="img-responsive" src="{{ dynamic_data_host }}/files/vault/DAO/Monitoring/weatherStrip.png" />
		</div>
	</div>
</div>