{%- include variable-core.liquid -%}
{%- assign i18n-ssois=site.data.ssois[i18nText-lang] -%}
{%- assign i18n-cadc=site.data.cadc[i18nText-lang] -%}
{%- assign i18n-ssois-labels=i18n-ssois.labels -%}

<h2 id="ephem">{{ i18n-ssois-labels.query_by_ephemeris_header }}</h2>
<form name="ephemform" action="{{ i18n-ssois.query_form_action }}" method="get" id="ephemform">
    <input type="hidden" name="lang" value="en"/>
    <input type="hidden" name="search" value="userephem"/>
    <div class="form-group form-inline">
        <label class="control-label" for="ephemtext"><strong>{{ i18n-ssois-labels.query_by_ephemeris_list_values_label }}:</strong></label> 
        <br/>
        (<a href="/en/ssois/documentation.html#ephem">{{ i18n-ssois-labels.query_by_ephemeris_documentation_link }}</a>)
        <textarea class="form-control" id="ephemtext" name="ephem" cols="80" rows="10" style="font-family: monospace">date time RA Dec</textarea>
    </div>
    <div class="form-group form-inline">
        <label class="control-label" for="ephemeellipse"><strong>{{ i18n-ssois-labels.position_uncertainty_header }}:</strong></label>
        <input type="text" class="form-control" id="ephemeellipse" name="eellipse" value="" size="4" />
        <label class="control-label" for="ephemeunits" class="hidden">{{ i18n-ssois-labels.error_units }}</label>
        <select id="ephemeunits" name="eunits" class="form-control">
            <option value="arcseconds">{{ i18n-ssois-labels.arcseconds }}</option>
            <option value="arcminutes">{{ i18n-ssois-labels.arcminutes }}</option>
        </select>
    </div>
    <fieldset>
        <div class="form-group form-inline">
            <legend class="hidden">{{ i18n-ssois-labels.resolve_to_image_extension }}:</legend>
            <strong>{{ i18n-ssois-labels.resolve_to_image_extension }}:</strong>
            <div class="radio">
                <label class="control-label" for="ephemextresyes"><input type="radio" id="ephemextresyes" name="extres" value="yes"/>&nbsp;{{ i18n-cadc.labels.yes_label }}</label>
                <label class="mrgn-lft-sm control-label" for="ephemextresno"><input type="radio" id="ephemextresno" name="extres" value="no" checked="checked" onclick="ephemform.xyres[1].checked=true" />&nbsp;{{ i18n-cadc.labels.no_label }}</label>
            </div>
        </div>
    </fieldset>
    <fieldset class="mrgn-bttm-sm">
        <div class="form-group form-inline">
            <legend class="hidden">{{ i18n-ssois-labels.resolve_to_x_y }}:</legend>
            <strong>{{ i18n-ssois-labels.resolve_to_x_y }}:</strong>
            <div class="radio">
                <label class="control-label" for="ephemxyresyes"><input type="radio" id="ephemxyresyes" name="xyres" value="yes" onclick="ephemform.extres[0].checked=true" />&nbsp;{{ i18n-cadc.labels.yes_label }}</label>
                <label class="mrgn-lft-sm control-label" for="ephemxyresno"><input type="radio" id="ephemxyresno" name="xyres" value="no" checked="checked" />&nbsp;{{ i18n-cadc.labels.no_label }}</label>
            </div>
        </div>
    </fieldset>
    <input type="button" 
            id="ephemtelinstsel:show" 
            name="showhide"
            value="{{ i18n-ssois-labels.show_telescope_instrument_list }}"
            class="btn btn-default mrgn-bttm-sm"
            onclick="togglehide(ephemform)" 
            />  
    <div id="telinst_ephemform" class="hidden"></div>
    <br/>
    <input type="submit" value="{{ i18n-ssois-labels.query_by_ephemeris_header }}" class="btn btn-danger" />      
    <input type="button" value="{{ i18n-ssois-labels.clear_form }}" class="btn btn-default"
            onclick="
            ephemform.ephem.value='';
            ephemform.eellipse.value='';
            ephemform.extres[1].checked=true;
            ephemform.xyres[1].checked=true;
            "/>
    <input type="button" value="{{ i18n-ssois-labels.show_example }}" class="btn btn-default"
        onclick="ephemform.ephem.value='2003-06-01  00:00:00  22:06:59.7  -17:46:23\n2003-06-02  00:00:00  22:07:38.0  -17:45:29\n2003-06-03  00:00:00  22:08:15.2  -17:44:43\n2003-06-04  00:00:00  22:08:51.1  -17:44:03\n2003-06-05  00:00:00  22:09:25.8  -17:43:32\n2003-06-06  00:00:00  22:09:59.2  -17:43:07\n2003-06-07  00:00:00  22:10:31.4  -17:42:50\n2003-06-08  00:00:00  22:11:02.2  -17:42:41\n2003-06-09  00:00:00  22:11:31.8  -17:42:39\n2003-06-10  00:00:00  22:12:00.1  -17:42:45\n2003-06-11  00:00:00  22:12:27.1  -17:42:58\n2003-06-12  00:00:00  22:12:52.7  -17:43:20\n2003-06-13  00:00:00  22:13:17.0  -17:43:49\n2003-06-14  00:00:00  22:13:39.9  -17:44:26\n2003-06-15  00:00:00  22:14:01.5  -17:45:11\n2003-06-16  00:00:00  22:14:21.6  -17:46:05\n2003-06-17  00:00:00  22:14:40.4  -17:47:06\n2003-06-18  00:00:00  22:14:57.7  -17:48:16\n2003-06-19  00:00:00  22:15:13.5  -17:49:33\n2003-06-20  00:00:00  22:15:27.9  -17:51:00\n2003-06-21  00:00:00  22:15:40.9  -17:52:34\n2003-06-22  00:00:00  22:15:52.3  -17:54:17\n2003-06-23  00:00:00  22:16:02.2  -17:56:08\n2003-06-24  00:00:00  22:16:10.6  -17:58:07\n2003-06-25  00:00:00  22:16:17.5  -18:00:15\n2003-06-26  00:00:00  22:16:22.8  -18:02:32\n2003-06-27  00:00:00  22:16:26.6  -18:04:56\n2003-06-28  00:00:00  22:16:28.7  -18:07:29\n2003-06-29  00:00:00  22:16:29.3  -18:10:10\n2003-06-30  00:00:00  22:16:28.3  -18:13:00\n2003-07-01  00:00:00  22:16:25.8  -18:15:57\n2003-07-02  00:00:00  22:16:21.6  -18:19:03\n2003-07-03  00:00:00  22:16:15.8  -18:22:16\n2003-07-04  00:00:00  22:16:08.4  -18:25:38\n2003-07-05  00:00:00  22:15:59.4  -18:29:07\n2003-07-06  00:00:00  22:15:48.7  -18:32:44\n2003-07-07  00:00:00  22:15:36.5  -18:36:28\n2003-07-08  00:00:00  22:15:22.6  -18:40:20\n2003-07-09  00:00:00  22:15:07.2  -18:44:19\n2003-07-10  00:00:00  22:14:50.1  -18:48:24\n2003-07-11  00:00:00  22:14:31.5  -18:52:37\n2003-07-12  00:00:00  22:14:11.2  -18:56:56\n2003-07-13  00:00:00  22:13:49.4  -19:01:21\n2003-07-14  00:00:00  22:13:26.0  -19:05:53\n2003-07-15  00:00:00  22:13:01.0  -19:10:31\n2003-07-16  00:00:00  22:12:34.5  -19:15:14\n2003-07-17  00:00:00  22:12:06.4  -19:20:03\n2003-07-18  00:00:00  22:11:36.8  -19:24:57\n2003-07-19  00:00:00  22:11:05.6  -19:29:56\n2003-07-20  00:00:00  22:10:32.9  -19:35:00\n2003-07-21  00:00:00  22:09:58.7  -19:40:09\n2003-07-22  00:00:00  22:09:23.1  -19:45:21\n2003-07-23  00:00:00  22:08:46.0  -19:50:37\n2003-07-24  00:00:00  22:08:07.5  -19:55:57\n2003-07-25  00:00:00  22:07:27.7  -20:01:19\n2003-07-26  00:00:00  22:06:46.4  -20:06:45\n2003-07-27  00:00:00  22:06:03.9  -20:12:12\n2003-07-28  00:00:00  22:05:20.0  -20:17:42\n2003-07-29  00:00:00  22:04:34.9  -20:23:13\n2003-07-30  00:00:00  22:03:48.7  -20:28:45\n2003-07-31  00:00:00  22:03:01.2  -20:34:18\n2003-08-01  00:00:00  22:02:12.7  -20:39:51\n2003-08-02  00:00:00  22:01:23.1  -20:45:24\n2003-08-03  00:00:00  22:00:32.5  -20:50:57\n2003-08-04  00:00:00  21:59:41.0  -20:56:28\n2003-08-05  00:00:00  21:58:48.6  -21:01:58\n2003-08-06  00:00:00  21:57:55.3  -21:07:26\n2003-08-07  00:00:00  21:57:01.3  -21:12:51\n2003-08-08  00:00:00  21:56:06.6  -21:18:14\n2003-08-09  00:00:00  21:55:11.2  -21:23:34\n2003-08-10  00:00:00  21:54:15.2  -21:28:50\n2003-08-11  00:00:00  21:53:18.7  -21:34:03\n2003-08-12  00:00:00  21:52:21.7  -21:39:11\n2003-08-13  00:00:00  21:51:24.3  -21:44:14\n2003-08-14  00:00:00  21:50:26.5  -21:49:12\n2003-08-15  00:00:00  21:49:28.5  -21:54:05\n2003-08-16  00:00:00  21:48:30.3  -21:58:52\n2003-08-17  00:00:00  21:47:31.9  -22:03:33\n2003-08-18  00:00:00  21:46:33.4  -22:08:08\n2003-08-19  00:00:00  21:45:34.9  -22:12:36\n2003-08-20  00:00:00  21:44:36.5  -22:16:56\n2003-08-21  00:00:00  21:43:38.2  -22:21:10\n2003-08-22  00:00:00  21:42:40.1  -22:25:15\n2003-08-23  00:00:00  21:41:42.3  -22:29:13\n2003-08-24  00:00:00  21:40:44.8  -22:33:03\n2003-08-25  00:00:00  21:39:47.8  -22:36:44\n2003-08-26  00:00:00  21:38:51.2  -22:40:16\n2003-08-27  00:00:00  21:37:55.2  -22:43:40\n2003-08-28  00:00:00  21:36:59.7  -22:46:54\n2003-08-29  00:00:00  21:36:05.0  -22:49:59\n2003-08-30  00:00:00  21:35:11.1  -22:52:55\n2003-08-31  00:00:00  21:34:17.9  -22:55:41\n2003-09-01  00:00:00  21:33:25.6  -22:58:17\n2003-09-02  00:00:00  21:32:34.3  -23:00:44\n2003-09-03  00:00:00  21:31:44.0  -23:03:00\n2003-09-04  00:00:00  21:30:54.7  -23:05:07\n2003-09-05  00:00:00  21:30:06.6  -23:07:03\n2003-09-06  00:00:00  21:29:19.6  -23:08:50\n2003-09-07  00:00:00  21:28:33.8  -23:10:26\n2003-09-08  00:00:00  21:27:49.2  -23:11:52\n';
            ephemform.eellipse.value='';
            ephemform.extres[1].checked=true;
            ephemform.xyres[1].checked=true;
            "/>
</form>