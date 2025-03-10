import { Page, expect } from '@playwright/test';
import { WebRoute } from '../../../constants/routes';
import { TextElement } from '../../elements/TextField';
import { BasePage } from '../BasePage';

export class PaymentPage extends BasePage {
  private readonly totalValue: TextElement;
  private readonly name = 'Payment';

  constructor(page: Page, options = { isMobile: false }) {
    super(page, WebRoute.PAYMENT, options);
    this.totalValue = new TextElement('Total value', page.getByTestId('total-value'));
  }

  private async getTotalValue(): Promise<number> {
    return parseInt((await this.totalValue.getTextContent()) || '');
  }

  async assertTotalValue(expectedTotal: number): Promise<void> {
    expect(await this.getTotalValue(), 'Expecting total value to match basket value').toEqual(expectedTotal);
  }
}
