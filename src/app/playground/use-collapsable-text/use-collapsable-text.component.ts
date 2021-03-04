import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-collapsable-text',
  templateUrl: './use-collapsable-text.component.html',
  styleUrls: ['./use-collapsable-text.component.scss'],
})
export class UseCollapsableTextComponent implements OnInit {
  description =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates blanditiis ab similique, officia dignissimos quis. Quae placeat consequuntur sapiente amet unde voluptatem laboriosam, excepturi molestiae voluptates, ex blanditiis aspernatur temporibus voluptatum facere corrupti non odit nam tempora! Eum impedit tenetur a ipsam debitis dicta doloribus. Cum autem hic ex fugit.';

  constructor() {}

  ngOnInit(): void {}
}
