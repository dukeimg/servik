App.game = App.cable.subscriptions.create "GameChannel",
  connected: ->
    @printMessage("Подкючен. Поиск оппонента")

  disconnected: ->
    @printMessage("Отключен")

  received: (data) ->
    switch data.action
      when "game_start"
        @printMessage("Опонент найден. Игра начата. Вы #{data.msg}.")


  printMessage: (message) ->
    $("#messages").append("<p>#{message}</p>")