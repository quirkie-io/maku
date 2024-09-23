import { COMMANDS, EVENTS, TYPES } from '@crosscutting'
import { User } from '@domain/user/entities'
import { FlowStep, HandlerContext, IEvent, IMediator, INextStep, NotificationHandler } from '@quirkie-io/quirkie'
import { inject, injectable } from 'inversify'
import { ICreateLeadCommand } from './3-create-lead'

@injectable()
@NotificationHandler(EVENTS.userCreated, { deadLetter: true })
export class SendWelcomeEventHandler extends FlowStep<IEvent<User>, void> {
  constructor(@inject(TYPES.mediator) mediator: IMediator) {
    super(mediator)
  }

  async next(req: IEvent<User>, context: HandlerContext): Promise<INextStep<ICreateLeadCommand>> {
    context.state?.set('key', 'value2')

    return {
      identifier: COMMANDS.createLead,
      data: {
        name: req.content.name,
        userId: req.content.id,
      },
    }
  }
}
