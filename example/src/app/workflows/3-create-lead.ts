import { COMMANDS, TYPES } from '@crosscutting'
import { FlowStep, HandlerContext, IMediator, RequestHandler } from '@quirkie-io/quirkie'
import { inject, injectable } from 'inversify'

export interface ICreateLeadCommand {
  name: string
  userId: string
}

@injectable()
@RequestHandler(COMMANDS.createLead, { deadLetter: true })
export class CreateLeadCommandHandler extends FlowStep<ICreateLeadCommand, void> {
  constructor(@inject(TYPES.mediator) mediator: IMediator) {
    super(mediator)
  }

  async next(req: ICreateLeadCommand, context: HandlerContext): Promise<void> {
    context.state?.destroy()
    console.log(req)
  }
}
