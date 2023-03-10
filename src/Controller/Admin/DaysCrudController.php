<?php

namespace App\Controller\Admin;

use App\Entity\Days;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;



class DaysCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Days::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('Jour'),
            TextField::new('lunch'),
            TextField::new('diner'),
        ];
    }
    
}
