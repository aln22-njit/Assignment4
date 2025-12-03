import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTemplate } from './item-template';

describe('ItemTemplate', () => {
  let component: ItemTemplate;
  let fixture: ComponentFixture<ItemTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
