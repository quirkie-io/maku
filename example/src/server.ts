import 'reflect-metadata'

import '@app'
import '@modules/find-my-way'

import { FastestValidatorModule } from '@modules/fastest-validator'
import { MapperModule } from '@modules/mapper'
import { DatabaseModule } from '@modules/orchid-orm'
import { PublisherModule, SubscriberModule } from '@quirkie-io/amqplib'
import { ResiliencyModule } from '@quirkie-io/attempt'
import { FindMyWayModule } from '@quirkie-io/find-my-way'
import { InversifyContainer } from '@quirkie-io/inversify'
import { MediatorModule } from '@quirkie-io/mediator'
import { JsonSerializerModule } from '@quirkie-io/native'
import { PinoModule } from '@quirkie-io/pino'
import { Server } from '@quirkie-io/quirkie'
import { LockModule } from '@quirkie-io/redlock'
import { StateModule } from '@quirkie-io/tedis'

export const server = Server.create({
  container: new InversifyContainer(),
  modules: [
    LockModule,
    MapperModule,
    JsonSerializerModule,
    FastestValidatorModule,
    PinoModule,
    ResiliencyModule,
    PublisherModule,
    SubscriberModule,
    MediatorModule,
    FindMyWayModule,
    DatabaseModule,
    StateModule,
  ],
})
