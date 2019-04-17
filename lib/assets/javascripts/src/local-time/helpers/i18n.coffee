{config} = LocalTime
{i18n} = config

LocalTime.getI18nValue = (keyPath = "", {locale} = locale: config.locale) ->
  value = getValue(i18n[locale], keyPath)
  if value?
    value
  else if locale isnt config.defaultLocale
    LocalTime.getI18nValue(keyPath, locale: config.defaultLocale)

LocalTime.translate = (keyPath, interpolations = {}, options) ->
  string = LocalTime.getI18nValue(keyPath, options)
  for key, replacement of interpolations
    string = string.replace("{#{key}}", replacement)
  string

LocalTime.transform = (string, type) ->
  if typeof string is 'string'
    switch type
      when 'capitalize'
        capitalize string
      when 'titleize'
        titleize string
      else
        string
  else
    string

getValue = (object, keyPath) ->
  value = object
  for key in keyPath.split(".")
    if value[key]?
      value = value[key]
    else
      return null
  value

capitalize = (input) ->
  "#{input.charAt(0).toUpperCase()}#{input.slice(1)}"

titleize = (input) ->
  input.toLowerCase().replace /(?:^|\s|-)\S/g, (x) ->
    x.toUpperCase()
