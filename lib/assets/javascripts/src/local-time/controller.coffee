#= require ./relative_time
#= require ./page_observer

{parseDate, strftime, getI18nValue, config, transform} = LocalTime

class LocalTime.Controller
  SELECTOR = "time[data-local]:not([data-localized])"

  constructor: ->
    @pageObserver = new LocalTime.PageObserver SELECTOR, @processElements

  start: ->
    unless @started
      @processElements()
      @startTimer()
      @pageObserver.start()
      @started = true

  startTimer: ->
    if interval = config.timerInterval
      @timer ?= setInterval(@processElements, interval)

  processElements: (elements = document.querySelectorAll(SELECTOR)) =>
    @processElement(element) for element in elements
    elements.length

  processElement: (element) ->
    datetime = element.getAttribute("datetime")
    format = element.getAttribute("data-format")
    local = element.getAttribute("data-local")
    transformType = element.getAttribute("data-transform")

    time = parseDate(datetime)
    return if isNaN time

    unless element.hasAttribute("title")
      title = strftime(time, getI18nValue("datetime.formats.default"))
      element.setAttribute("title", title)

    content =
      switch local
        when "time"
          markAsLocalized(element)
          strftime(time, format)
        when "date"
          markAsLocalized(element)
          relative(time).toDateString()
        when "time-ago"
          relative(time).toString()
        when "time-or-date"
          relative(time).toTimeOrDateString()
        when "weekday"
          relative(time).toWeekdayString()
        when "weekday-or-date"
          relative(time).toWeekdayString() or relative(time, transform: transform).toDateString()

    content = transform content, transformType

    element.textContent = content

    unless element.hasAttribute("aria-label")
      element.setAttribute("aria-label", content)

  markAsLocalized = (element) ->
    element.setAttribute("data-localized", "")

  relative = (time, options = {}) ->
    new LocalTime.RelativeTime time, options
