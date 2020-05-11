	//получить данные об игроках
	js Vars.playerGroup.all()
	//надпись в мире
	js player = Vars.playerGroup.getByID(100); Call.onLabel("Сообщение", <Время жизни сообщения>, player.getX(), player.getY());
	//диалоговое окно с кнопкой [ОК]
	js Call.onInfoMessage("Сообщение");
	//надпись на экране, с привязкой по сторонам
	js Call.onInfoPopup("Сообщение", <Время жизни сообщения>, 550, 550, 500, 500, 500)
	//спавн блока в мире
	js block = Blocks.coreShard; player = Vars.playerGroup.getByID(100); BuildBlock.onConstructFinish(Vars.world.tile(player.tileX(),player.tileY()),block,0,0,player.getTeam(),false)
	//проверка на валидность установки блока в точке
	js player = Vars.playerGroup.getByID(100); Build.validPlace(player.getTeam(), player.tileX(), player.tileY(), Blocks.rtgGenerator, 0);
	//спавн мобов и выдача им предметов
	js player = Vars.playerGroup.getByID(100); unit = UnitTypes.reaper.create(Team.sharded); unit.set(player.getX(), player.getY()); unit.add(); unit.addItem(Items.[ПредметСлитно], <Колличество>)
	//Смена ника
	js Vars.playerGroup.getByID(100).name = "Ник"
	//Выдача предметов игрогу
	js player = Vars.playerGroup.getByID(100).addItem(Items.[ПредметСлитно], <Колличество>);
	//Смеерть
	js unit.onDeath()
	//Помещение предметов в ядро
	js Vars.state.teams.cores(Team.[Команда]).first().items.set(Items.coal, <Колличество>);
	//Смена команды
	js player = Vars.playerGroup.getByID(1065397).setTeam(Team.[Команда])
	


	js for(x=0;x<10;x++){ player = Vars.playerGroup.getByID(1065397); Calls.createBullet(Bullets.lancerLaser, player.getTeam(), player.getX(), player.getY(), Mathf.random(360), Mathf.random(0.5, 1.0), Mathf.random(0.2, 1.0))}
            
            