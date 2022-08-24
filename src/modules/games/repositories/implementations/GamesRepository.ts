import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return this.repository.createQueryBuilder("game")
      .where("LOWER(game.title) LIKE :title", { title: `%${param}%` })
      .getMany();
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query("select count(*) from games");
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect('user.games', 'game')
      .where("game.id = :id", { id: `${id}` })
      .getMany();
  }
}
