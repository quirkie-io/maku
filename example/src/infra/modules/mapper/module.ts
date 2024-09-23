import { Mapper, MapperModule as Base } from '@quirkie-io/mapper'
import { UserProfile } from './profiles'

export class MapperModule extends Base {
  addProfiles(mapper: Mapper): void {
    mapper.addProfile(UserProfile)
  }
}
