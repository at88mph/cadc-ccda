{%- assign current_year = 'now' | date: "%Y" | to_integer -%}
{%- assign low_year     = current_year | minus: 2 -%}
{%- assign hi_year      = current_year | plus: 2 -%}

<form action="http://www.briancasey.org/artifacts/astro/skycalendar.cgi" enctype="application/x-www-form-urlencoded" target="skycalendar">
  <input type="hidden" name="observatory" value="d" data-role="none">
  <input type="hidden" name="command" value="display" data-role="none">
  
  <div class="form-group">
    <label class="control-label" for="year">Year: &nbsp;</label>
    <select name="year" id="year" class="form-control">
    {% for i in (low_year..hi_year) %}
        <option value="{{ i }}" {% if i == current_year %}selected="selected"{% endif %}>{{ i }}</option>
    {% endfor %}
    </select>
  </div>

  <div class="form-group">
    <label class="control-label" for="month1">Start Month: &nbsp;</label>
    <select name="month1" id="month1" class="form-control">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option selected="selected" value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
  </div>

  <div class="form-group">
    <label class="control-label" for="month2">End Month: &nbsp;</label>
    <select name="month2" id="month2" class="form-control">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option selected="selected" value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
  </div>
  <input type="submit" class="btn btn-primary" name=".submit" value="Get Calendar" data-role="none">
</form>