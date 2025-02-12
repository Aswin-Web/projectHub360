import { Injectable } from '@nestjs/common';
import { OrganizationObj } from './organization.model';

@Injectable()
export class OrganizationService {
  private organization: OrganizationObj[] = [
    // {
    //   org_id: 'ss',
    //   created_at: 'ss',
    //   org_external_name: 'ss',
    //   org_internal_name: 'd',
    //   user_id: 'ee',
    //   update_at: '',
    // },
  ];
  findall(): OrganizationObj[] {
    return this.organization;
  }
}
